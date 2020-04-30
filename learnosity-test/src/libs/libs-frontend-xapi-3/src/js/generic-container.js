/* global $ */
/* global Channel */

class GenericContainer {

  constructor(uniqueLOId, dependencyBase, LOInitParams) {
      this.uniqueLOId = uniqueLOId;
      this.dependencyBase = dependencyBase;
      this.LOInitParams = LOInitParams;
  }

  launchLO(itemParams, myadapter, callback = () => {}) {
    let containerID = myadapter.adapterConfig.iframeContainerId;

    let iframeUniqueId = myadapter.adapterConfig.iframeId.substring(1);

    $(containerID).html('<div class="content-loader-container" style="display: flex;height: 100%;align-items: center;justify-content: center;position: absolute;top: 0;left: 0;width: 100%;"><div class="content-loader" style="font-size:42px;"><i class="fa fa-spinner fa-pulse" ></i></div></div><iframe id="' + iframeUniqueId + '" style="height:100%; width:100%;visibility:hidden;" src="" allowfullscreen></iframe>');
    let iframe = $(containerID).find('iframe');

    let initParams = this.LOInitParams;//this.getInitParams(itemParams);

    $(iframe).on('load', () => {
      myadapter.launchNewLO(itemParams, this);
      this.initChannel(iframe)
      .then((channel) => {
        this.channel = channel;
        this.bindChannel(channel, initParams, myadapter);
      });
    });

    let id = itemParams.learningObject.code;

    if (id) {
      $.get({
        url: itemParams.learningObject.path + '/index.html'
      }, data => {
        const base = '<base href="' + itemParams.learningObject.path + '/">';
        data = data.replace(/(<head[\s\S]*?>)/, '$1' + base);

        /* Callback binds events with iframe - needs to be called here for IE issue
         * IE issue- iframe unload event triggers first
         */
        callback();

        iframe[0].contentWindow.document.open();
        if (window.MSApp && window.MSApp.execUnsafeLocalFunction) {
            window.MSApp.execUnsafeLocalFunction(function() {
                iframe[0].contentWindow.document.write(data);
            });
        } else {
            iframe[0].contentWindow.document.write(data);
        }
        iframe[0].contentWindow.document.close();
      }).fail(() => {
        myadapter.adapterConfig.errorHandler(myadapter.adapterConfig.id, {
          type: 'load-index.html',
          message: 'Something went wrong'
        });
      });
    }
  }

  getInitParams(itemParams) {
    let initParams = {
      id: itemParams.learningObject.code,
      loWithoutControls: false
    };
    if(itemParams.container && itemParams.container.config && itemParams.container.config.hasOwnProperty('disableLOButtons')) {
      initParams.loWithoutControls = itemParams.container.config.disableLOButtons;
    }
    let state = itemParams.learningObject.state;
    if(!$.isEmptyObject(state)) {
      initParams.state = state;
    }
    return initParams;
  }

  initChannel(iframe) {
    return new Promise(function(resolve, reject) {
      var channel = Channel.build({
        window: iframe[0].contentWindow,
        origin: '*',
        scope: 'cup-generic-default',
        onReady: function() {
          resolve(channel);
        }
      });
    });
  }

  bindChannel(channel, initParams, adapter) {

    channel.bind('sendMessageToContainer', function(trans, params) {
      if(params.type !== 'init') {
        adapter.platformAdapter.bubbleMessageFromContent(params);
      }

      if(params.type === 'init') {
        adapter.platformAdapter.bubbleMessageFromContent(params, initParams);
        return initParams;
      } else if(params.type === 'ready') {
        $('.content-loader-container').remove();
        $(adapter.adapterConfig.iframeId).css('visibility', '');
      } else if(params.type === 'controlsChange') {
        if(adapter.itemParamsObj.container && adapter.itemParamsObj.container.config && adapter.itemParamsObj.container.config.disableLOButtons) {
          adapter.platformAdapter.bubbleControlsChange(params.data);
        }
      } else if(params.type === 'newState') {
        adapter.platformAdapter.bubbleState(params.data);
      } else if(params.type === 'newStatements') {
        adapter.platformAdapter.bubbleStatements(params.data);
      } else if(params.type === 'size') {
        adapter.platformAdapter.bubbleSizeChange(params.data);
      } else if(params.type === 'terminated') {
        adapter.platformAdapter.bubbleTerminated();
      } else if(params.type === 'feedbackChange') {
        adapter.platformAdapter.bubbleFeedbackChange(params.data);
      }
    });
  }

  triggerLOControlEventListener(params, adapter) {
    return new Promise((resolve, reject) => {
      this.channel.call({
        method: 'receiveMessageFromContainer',
        params,
        success: function(response) {
          adapter.platformAdapter.bubbleMessageToContent(params, response);
          resolve(response);
        },
        error: function(error) {
          adapter.platformAdapter.bubbleMessageToContent(params, error);
          console.log('receiveMessageFromContainer error', error);
        }
      });
    });
  }
}

export default GenericContainer;
