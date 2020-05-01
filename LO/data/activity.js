var activityJson = {
  "type": "activity",
  "model": "bank",
  "itemId": "leonardo-demo-player",
  "editor": "bank-editor",
  "player": "test-player",
  "itemMeta": {
    "title": "Question Bank",
    "description": "This Question Bank is a collection of a variety of questions",
    "tags": {}
  },
  "itemBody": {
    "questions": [
      {
        "id": "ITEM01",
        "meta": {
          "score": 4
        }
      }
    ]
  },
  "itemFragments": {
    "ITEM01": {
      "itemId": {
        "leonardoId": "comproqa-dev-861",
        "orgId": "compro",
        "revision": 1,
        "type": "item",
        "model": "spreadsheet-question",
        "editor": "spreadsheet-question-editor",
        "player": "spreadsheet-question-player",
        "meta": {
          "title": "test-ques-psd-21",
          "description": "",
          "tags": {
            "custom": []
          },
          "source": {
            "paint-id": "comproqa-dev-861",
            "paint-id-revision": 1
          }
        },
        "widgetStyles": {},
        "templateType": "topdown",
        "templatePreferences": {
          "splitter": {
            "visible": true
          },
          "layout": "A"
        },
        "templateData": {
          "instructions": {
            "type": "leoHTML",
            "data": "<html><head></head><body><p>adas</p></body></html>"
          },
          "leonardoSpreadsheet": {
            "resource": "RE1",
            "preferences": {
              "ribbon": {
                "visible": false,
                "collapsed": false,
                "type": "type1"
              },
              "sheetbar": {
                "visible": false,
                "allowInsertDelete": false,
                "allowRename": false
              },
              "formulabar": {
                "visible": false,
                "namebox": false,
                "expanded": false
              },
              "grid": {
                "displayMode": "tabular",
                "rowHeader": false,
                "colHeader": false,
                "displayRanges": {
                  "sidZ29puaK": {
                    "endCell": "K40",
                    "startCell": "A1"
                  },
                  "sidZ29puaJ": {
                    "endCell": "E6",
                    "startCell": "A1"
                  }
                },
                "showGridLines": true
              }
            }
          }
        },
        "resources": {
          "RE1": {
            "type": "leonardoJSON",
            "leonardoJSON": {
              "data": {
                "@schemaVersion": "0.1",
                "activeSheet": "Sheet1",
                "names": [
                  {
                    "name": "test",
                    "range": "Sheet1!$G$5:$K$5"
                  },
                  {
                    "name": "test3",
                    "range": "Sheet1!$G$34"
                  },
                  {
                    "name": "test4",
                    "range": "Sheet1!$G$34"
                  }
                ],
                "defaults": {
                  "columnWidth": 64,
                  "rowHeight": 20,
                  "cellStyle": {
                    "wrap": false,
                    "textAlign": "general",
                    "verticalAlign": "bottom"
                  },
                  "cellFontAttrs": {
                    "family": "Calibri",
                    "size": 11,
                    "color": "#000000",
                    "bold": false,
                    "italic": false
                  }
                },
                "#sheets": [
                  {
                    "name": "Sheet1",
                    "id": "sidZ29puaK",
                    "maxColIndexEdited": 10,
                    "maxRowIndexEdited": 39,
                    "selection": "F32:F32",
                    "activeCell": "F32:F32",
                    "frozenRows": 0,
                    "frozenColumns": 0,
                    "showGridLines": true,
                    "defaults": {
                      "columnWidth": 64,
                      "rowHeight": 20,
                      "cellStyle": {
                        "wrap": false,
                        "textAlign": "general",
                        "verticalAlign": "bottom"
                      },
                      "cellFontAttrs": {
                        "family": "Calibri",
                        "size": 11,
                        "color": "#000000",
                        "bold": false,
                        "italic": false
                      }
                    },
                    "#rows": [
                      {
                        "index": 0,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A1",
                            "value": "Scenario",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B1",
                            "value": "TC - Final",
                            "index": 1,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C1",
                            "value": "TC - Submission",
                            "index": 2,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D1",
                            "value": "Submission Formula",
                            "index": 3,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E1",
                            "value": "Extra",
                            "index": 4,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F1",
                            "value": "Extra",
                            "index": 5,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G1",
                            "value": "Parameter1",
                            "index": 6,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H1",
                            "value": "Parameter2",
                            "index": 7,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I1",
                            "value": "Parameter3",
                            "index": 8,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J1",
                            "value": "Parameter4",
                            "index": 9,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K1",
                            "value": "Parameter5",
                            "index": 10,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 1,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A2",
                            "value": "Same as formula",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B2",
                            "value": "SUM(G2:K2)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C2",
                            "value": "SUM(G2:K2)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D2",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E2",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F2",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G2",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H2",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I2",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J2",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K2",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 2,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A3",
                            "value": "Value only",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B3",
                            "value": "SUM(G3:K3)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C3",
                            "value": 66,
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D3",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E3",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F3",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G3",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H3",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I3",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J3",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K3",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 3,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A4",
                            "value": "Individual Cells",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B4",
                            "value": "SUM(G4:K4)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C4",
                            "value": "SUM(G4,H4,I4,J4,K4)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D4",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E4",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F4",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G4",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H4",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I4",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J4",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K4",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 4,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A5",
                            "value": "Named Range",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B5",
                            "value": "SUM(G5:K5)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C5",
                            "value": "SUM(test)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D5",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E5",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F5",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G5",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H5",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I5",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J5",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K5",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 5,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A6",
                            "value": "Mixed Cells and Range",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B6",
                            "value": "SUM(G6:K6)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C6",
                            "value": "SUM(G6,H6:J6,K6)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D6",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E6",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F6",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G6",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H6",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I6",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J6",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K6",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 6,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A7",
                            "value": "Absolute Reference",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B7",
                            "value": "SUM(G7:K7)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C7",
                            "value": "SUM($G$7:$K$7)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D7",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E7",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F7",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G7",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H7",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I7",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J7",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K7",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 7,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A8",
                            "value": "Negative numbers",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B8",
                            "value": "SUM(G8:K8)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C8",
                            "value": "SUM(G$8:K$8)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D8",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E8",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F8",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G8",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H8",
                            "value": -5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I8",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J8",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K8",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 8,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A9",
                            "value": "Characters",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B9",
                            "value": "SUM(G9:K9)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C9",
                            "value": "SUM(G9,H9,I9,J9,K9)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D9",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E9",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F9",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G9",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H9",
                            "value": "abc",
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I9",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J9",
                            "value": "test",
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K9",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 9,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A10",
                            "value": "Cell Permutation",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B10",
                            "value": "SUM(G10:K10)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C10",
                            "value": "G10+H10+I10+J10+K10",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D10",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E10",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F10",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G10",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H10",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I10",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J10",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K10",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 10,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A11",
                            "value": "Blank Cells",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B11",
                            "value": "SUM(G11:K11)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C11",
                            "value": "SUM(G11,H11,I11,J11,K11)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D11",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E11",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F11",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G11",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H11",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I11",
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J11",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K11",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 11,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A12",
                            "value": "Values inside the formula",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B12",
                            "value": "SUM(G12:K12)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C12",
                            "value": "SUM(1,5,15,31,14)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D12",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E12",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F12",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G12",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H12",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I12",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J12",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K12",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 12,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A13",
                            "value": "Sheet Reference",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B13",
                            "value": "SUM(Sheet2!A2:E2)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C13",
                            "value": "SUM(Sheet2!A2,Sheet2!B2,Sheet2!C2,Sheet2!D2,Sheet2!E2)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D13",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E13",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F13",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G13",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H13",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I13",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J13",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K13",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 13,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A14",
                            "value": "Formula Operators",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B14",
                            "value": "-(G14*H14/(1-((1+I14)^(-J14))))",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C14",
                            "value": "-($G$14*$H$14/(1-((1+$I$14)^(-$J$14))))",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D14",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E14",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F14",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G14",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H14",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I14",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J14",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K14",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 14,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A15",
                            "value": "VLOOKUP",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B15",
                            "value": "VLOOKUP(G15,I12:K15,2,FALSE)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C15",
                            "value": "VLOOKUP(G15,I12:K15,2,0)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D15",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E15",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F15",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G15",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H15",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I15",
                            "value": 1,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J15",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K15",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 15,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A16",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B16",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C16",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D16",
                            "index": 3,
                            "style": {
                              "format": "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E16",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F16",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G16",
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H16",
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I16",
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J16",
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K16",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 16,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A17",
                            "value": "CONCATENATE",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B17",
                            "value": "CONCATENATE(G17,H17,I17,J17,K17)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C17",
                            "value": "CONCATENATE($G$17,H$17,$I17,J17,K$17)",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D17",
                            "index": 3,
                            "style": {
                              "format": "0%",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E17",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F17",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G17",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H17",
                            "value": -1000,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I17",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J17",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K17",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 17,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A18",
                            "value": "BASE",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B18",
                            "value": "BASE(100,H18)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C18",
                            "value": "BASE(G18,H18)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D18",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E18",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F18",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G18",
                            "value": 100,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H18",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I18",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J18",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K18",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 18,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A19",
                            "value": "AVERAGE",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B19",
                            "value": "AVERAGE(G19:K19)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C19",
                            "value": "AVERAGE($G$19:$K$19)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D19",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E19",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F19",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G19",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H19",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I19",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J19",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K19",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 19,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A20",
                            "value": "MEDIAN",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B20",
                            "value": "MEDIAN(G20:K20)",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C20",
                            "value": "MEDIAN(G20,H20,I20,J20,K20)",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D20",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E20",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F20",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G20",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H20",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I20",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J20",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K20",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 20,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A21",
                            "value": "COUNT",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B21",
                            "value": "COUNT(G21:K21)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C21",
                            "value": "COUNT(G21,H21,I21,J21,K21)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D21",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E21",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F21",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G21",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H21",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I21",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J21",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K21",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 21,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A22",
                            "value": "ABS",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B22",
                            "value": "ABS(G22)",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C22",
                            "value": "ABS(1)",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D22",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E22",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F22",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G22",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H22",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I22",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J22",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K22",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 22,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A23",
                            "value": "SLOPE",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B23",
                            "value": "SLOPE(G23:H23,I23:J23)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C23",
                            "value": "SLOPE($G$23:$H$23,$I$23:$J$23)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D23",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E23",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F23",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G23",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H23",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I23",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J23",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K23",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 23,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A24",
                            "value": "XNPV",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B24",
                            "value": "XNPV(I24,H24:H26,G24:G26)",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C24",
                            "value": "XNPV(20,H24:H26,G24:G26)",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D24",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E24",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F24",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G24",
                            "value": 43687,
                            "index": 6,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "mm-dd-yy",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H24",
                            "value": -3248,
                            "index": 7,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I24",
                            "value": 20,
                            "index": 8,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J24",
                            "value": 0,
                            "index": 9,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K24",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 24,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A25",
                            "value": "SQRT",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B25",
                            "value": "SQRT(H23)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C25",
                            "value": "SQRT(5)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D25",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E25",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F25",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G25",
                            "value": 43718,
                            "index": 6,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "mm-dd-yy",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H25",
                            "value": 256236,
                            "index": 7,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I25",
                            "index": 8,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J25",
                            "index": 9,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K25",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 25,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A26",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B26",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C26",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D26",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E26",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F26",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G26",
                            "value": 43748,
                            "index": 6,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "mm-dd-yy",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H26",
                            "value": 35135,
                            "index": 7,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I26",
                            "index": 8,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J26",
                            "index": 9,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K26",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 26,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A27",
                            "value": "PMT",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B27",
                            "value": "PMT(H27,I27,J27,,1)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C27",
                            "value": "PMT(H27,I27,J27,0,1)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D27",
                            "index": 3,
                            "style": {
                              "format": "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E27",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F27",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G27",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H27",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I27",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J27",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K27",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 27,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A28",
                            "value": "STDEV.S",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B28",
                            "value": "STDEV.S(G28:K28)",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C28",
                            "value": "STDEV.S(G28,H28,I28,J28,K28)",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D28",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E28",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F28",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G28",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H28",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I28",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J28",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K28",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 28,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A29",
                            "value": "VAR.P",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B29",
                            "value": "VAR.P(G29:K29)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C29",
                            "value": "VAR.P(G29,H29,I29,J29,K29)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D29",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E29",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F29",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G29",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H29",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I29",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J29",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K29",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 29,
                        "visible": true,
                        "height": 40,
                        "#cells": [
                          {
                            "ref": "A30",
                            "value": "HLOOKUP",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B30",
                            "value": "HLOOKUP(G30,H30:K32,3,FALSE)",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C30",
                            "value": "HLOOKUP($G$30,$H$30:$K$32,3,0)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D30",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E30",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F30",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G30",
                            "value": 3,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H30",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I30",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J30",
                            "value": 3,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K30",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 30,
                        "visible": true,
                        "height": 60,
                        "#cells": [
                          {
                            "ref": "A31",
                            "value": "Complex formula 1",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B31",
                            "value": "ROUND(IF(OR(I31=\"15\",I31=\"Manor\"),K31*Sheet2!$A$2/12,F32*Sheet2!$C$2/12),2)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C31",
                            "value": "ROUND(IF(OR($I$31=\"15\",$I$31=\"Manor\"),$K$31*Sheet2!$A$2/12,F32*Sheet2!$C$2/12),2)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D31",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E31",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F31",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G31",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H31",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I31",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J31",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K31",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 31,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A32",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B32",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C32",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D32",
                            "index": 3,
                            "style": {
                              "format": "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E32",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F32",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G32",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H32",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I32",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J32",
                            "value": "check",
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K32",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 32,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A33",
                            "value": "Nested Formula",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B33",
                            "value": "SUM(SUM(G33:I33),J33,K33)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C33",
                            "value": "SUM(SUM(G33:I33),J33:K33)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D33",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E33",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F33",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G33",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H33",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I33",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J33",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K33",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 33,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A34",
                            "value": "Named Reference",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B34",
                            "value": "test3",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C34",
                            "value": "test4",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D34",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E34",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F34",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G34",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H34",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I34",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J34",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K34",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 34,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A35",
                            "value": "Direct Reference",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B35",
                            "value": "G35",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C35",
                            "value": "$G$35",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D35",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E35",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F35",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G35",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H35",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I35",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J35",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K35",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 35,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A36",
                            "value": "Worksheet Name",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B36",
                            "value": "Sheet2!A2",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C36",
                            "value": "Sheet2!A$2",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D36",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E36",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F36",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G36",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H36",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I36",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J36",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K36",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 36,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A37",
                            "value": "MarkOff Case 1",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B37",
                            "value": "SUM(G37:K37)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C37",
                            "value": "SUM(G37,H37,I37,J37)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D37",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E37",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F37",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G37",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H37",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I37",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J37",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K37",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 37,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A38",
                            "value": "MarkOff Case 2",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B38",
                            "value": "VLOOKUP(G15,I12:K15,2,FALSE)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C38",
                            "value": "VLOOKUP(G15,I12:K15,1,FALSE)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D38",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E38",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F38",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G38",
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H38",
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I38",
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J38",
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K38",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 38,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A39",
                            "value": "MarkOff Case 3 - Value",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B39",
                            "value": "NOW()",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C39",
                            "value": "NOW()",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D39",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E39",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F39",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G39",
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H39",
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I39",
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J39",
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K39",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 39,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A40",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B40",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C40",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D40",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E40",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F40",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G40",
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H40",
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I40",
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J40",
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K40",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      }
                    ],
                    "#columns": [
                      {
                        "visible": true,
                        "width": 169,
                        "index": 0
                      },
                      {
                        "visible": true,
                        "width": 203,
                        "index": 1
                      },
                      {
                        "visible": true,
                        "width": 295,
                        "index": 2
                      },
                      {
                        "visible": true,
                        "width": 134,
                        "index": 3
                      },
                      {
                        "visible": true,
                        "width": 134,
                        "index": 4
                      },
                      {
                        "visible": true,
                        "width": 134,
                        "index": 5
                      },
                      {
                        "visible": true,
                        "width": 79,
                        "index": 6
                      },
                      {
                        "visible": true,
                        "width": 79,
                        "index": 7
                      },
                      {
                        "visible": true,
                        "width": 79,
                        "index": 8
                      },
                      {
                        "visible": true,
                        "width": 79,
                        "index": 9
                      },
                      {
                        "visible": true,
                        "width": 79,
                        "index": 10
                      }
                    ],
                    "extraInfo": {
                      "id": "sidZ29puaK"
                    }
                  },
                  {
                    "name": "Sheet2",
                    "id": "sidZ29puaJ",
                    "maxColIndexEdited": 4,
                    "maxRowIndexEdited": 5,
                    "selection": "A1:XFD1048576",
                    "activeCell": "A1:A1",
                    "frozenRows": 0,
                    "frozenColumns": 0,
                    "showGridLines": true,
                    "defaults": {
                      "columnWidth": 64,
                      "rowHeight": 20,
                      "cellStyle": {
                        "wrap": false,
                        "textAlign": "general",
                        "verticalAlign": "bottom"
                      },
                      "cellFontAttrs": {
                        "family": "Calibri",
                        "size": 11,
                        "color": "#000000",
                        "bold": false,
                        "italic": false
                      }
                    },
                    "#rows": [
                      {
                        "index": 0,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A1",
                            "value": "Parameter1",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B1",
                            "value": "Parameter2",
                            "index": 1,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C1",
                            "value": "Parameter3",
                            "index": 2,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D1",
                            "value": "Parameter4",
                            "index": 3,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E1",
                            "value": "Parameter5",
                            "index": 4,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 1,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A2",
                            "value": 1,
                            "index": 0,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B2",
                            "value": 5,
                            "index": 1,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C2",
                            "value": 15,
                            "index": 2,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D2",
                            "value": 31,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E2",
                            "value": 14,
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 2,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A3",
                            "value": 1,
                            "index": 0,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B3",
                            "value": 5,
                            "index": 1,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C3",
                            "value": 15,
                            "index": 2,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D3",
                            "value": 31,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E3",
                            "value": 14,
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 3,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A4",
                            "value": 1,
                            "index": 0,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B4",
                            "value": 5,
                            "index": 1,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C4",
                            "value": 15,
                            "index": 2,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D4",
                            "value": 31,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E4",
                            "value": 14,
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 4,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A5",
                            "value": 1,
                            "index": 0,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B5",
                            "value": 5,
                            "index": 1,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C5",
                            "value": 15,
                            "index": 2,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D5",
                            "value": 31,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E5",
                            "value": 14,
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 5,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A6",
                            "value": 1,
                            "index": 0,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B6",
                            "value": 5,
                            "index": 1,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C6",
                            "value": 15,
                            "index": 2,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D6",
                            "value": 31,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E6",
                            "value": 14,
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      }
                    ],
                    "extraInfo": {
                      "id": "sidZ29puaJ"
                    }
                  }
                ]
              }
            }
          },
          "RE2": {
            "type": "leonardoJSON",
            "leonardoJSON": {
              "data": {
                "@schemaVersion": "0.1",
                "activeSheet": "Sheet1",
                "names": [
                  {
                    "name": "test",
                    "range": "Sheet1!$G$5:$K$5"
                  },
                  {
                    "name": "test2",
                    "range": "Sheet1!$G$34:$K$34"
                  },
                  {
                    "name": "test3",
                    "range": "Sheet1!$G$34"
                  }
                ],
                "defaults": {
                  "columnWidth": 64,
                  "rowHeight": 20,
                  "cellStyle": {
                    "wrap": false,
                    "textAlign": "general",
                    "verticalAlign": "bottom"
                  },
                  "cellFontAttrs": {
                    "family": "Calibri",
                    "size": 11,
                    "color": "#000000",
                    "bold": false,
                    "italic": false
                  }
                },
                "#sheets": [
                  {
                    "name": "Sheet1",
                    "id": "sidZ29puaK",
                    "maxColIndexEdited": 10,
                    "maxRowIndexEdited": 39,
                    "selection": "B36:B36",
                    "activeCell": "B36:B36",
                    "frozenRows": 0,
                    "frozenColumns": 0,
                    "showGridLines": true,
                    "defaults": {
                      "columnWidth": 64,
                      "rowHeight": 20,
                      "cellStyle": {
                        "wrap": false,
                        "textAlign": "general",
                        "verticalAlign": "bottom"
                      },
                      "cellFontAttrs": {
                        "family": "Calibri",
                        "size": 11,
                        "color": "#000000",
                        "bold": false,
                        "italic": false
                      }
                    },
                    "#rows": [
                      {
                        "index": 0,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A1",
                            "value": "Scenario",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B1",
                            "value": "TC - Final",
                            "index": 1,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C1",
                            "value": "TC - Submission",
                            "index": 2,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D1",
                            "value": "Submission Formula",
                            "index": 3,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E1",
                            "value": "Extra",
                            "index": 4,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F1",
                            "value": "Extra",
                            "index": 5,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G1",
                            "value": "Parameter1",
                            "index": 6,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H1",
                            "value": "Parameter2",
                            "index": 7,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I1",
                            "value": "Parameter3",
                            "index": 8,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J1",
                            "value": "Parameter4",
                            "index": 9,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K1",
                            "value": "Parameter5",
                            "index": 10,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 1,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A2",
                            "value": "Same as formula",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B2",
                            "value": "SUM(G2:K2)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C2",
                            "value": "SUM(G2:K2)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D2",
                            "value": 66,
                            "formula": "SUM(G2:K2)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R1.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R1.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E2",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F2",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G2",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H2",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I2",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J2",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K2",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 2,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A3",
                            "value": "Value only",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B3",
                            "value": "SUM(G3:K3)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C3",
                            "value": 66,
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D3",
                            "value": 66,
                            "formula": "SUM(G3:K3)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R2.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R2.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E3",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F3",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G3",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H3",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I3",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J3",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K3",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 3,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A4",
                            "value": "Individual Cells",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B4",
                            "value": "SUM(G4:K4)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C4",
                            "value": "SUM(G4,H4,I4,J4,K4)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D4",
                            "value": 66,
                            "formula": "SUM(G4:K4)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R3.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R3.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E4",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F4",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G4",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H4",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I4",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J4",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K4",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 4,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A5",
                            "value": "Named Range",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B5",
                            "value": "SUM(G5:K5)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C5",
                            "value": "SUM(test)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D5",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E5",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F5",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G5",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H5",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I5",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J5",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K5",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 5,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A6",
                            "value": "Mixed Cells and Range",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B6",
                            "value": "SUM(G6:K6)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C6",
                            "value": "SUM(G6,H6:J6,K6)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D6",
                            "value": 66,
                            "formula": "SUM(G6:K6)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R4.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R4.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E6",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F6",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G6",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H6",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I6",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J6",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K6",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 6,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A7",
                            "value": "Absolute Reference",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B7",
                            "value": "SUM(G7:K7)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C7",
                            "value": "SUM($G$7:$K$7)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D7",
                            "value": 66,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R5.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E7",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F7",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G7",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H7",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I7",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J7",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K7",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 7,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A8",
                            "value": "Negative numbers",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B8",
                            "value": "SUM(G8:K8)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C8",
                            "value": "SUM(G$8:K$8)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D8",
                            "value": 56,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R6.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E8",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F8",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G8",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H8",
                            "value": -5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I8",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J8",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K8",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 8,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A9",
                            "value": "Characters",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B9",
                            "value": "SUM(G9:K9)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C9",
                            "value": "SUM(G9,H9,I9,J9,K9)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D9",
                            "value": 30,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R7.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E9",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F9",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G9",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H9",
                            "value": "abc",
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I9",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J9",
                            "value": "test",
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K9",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 9,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A10",
                            "value": "Cell Permutation",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B10",
                            "value": "SUM(G10:K10)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C10",
                            "value": "G10+H10+I10+J10+K10",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D10",
                            "value": 66,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R8.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E10",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F10",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G10",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H10",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I10",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J10",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K10",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 10,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A11",
                            "value": "Blank Cells",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B11",
                            "value": "SUM(G11:K11)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C11",
                            "value": "SUM(G11,H11,I11,J11,K11)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D11",
                            "value": 37,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R9.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E11",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F11",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G11",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H11",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I11",
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J11",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K11",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 11,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A12",
                            "value": "Values inside the formula",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B12",
                            "value": "SUM(G12:K12)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C12",
                            "value": "SUM(1,5,15,31,14)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D12",
                            "value": 66,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R10.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E12",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F12",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G12",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H12",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I12",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J12",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K12",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 12,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A13",
                            "value": "Sheet Reference",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B13",
                            "value": "SUM(Sheet2!A2:E2)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C13",
                            "value": "SUM(Sheet2!A2,Sheet2!B2,Sheet2!C2,Sheet2!D2,Sheet2!E2)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D13",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E13",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F13",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G13",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H13",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I13",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J13",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K13",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 13,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A14",
                            "value": "Formula Operators",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B14",
                            "value": "-(G14*H14/(1-((1+I14)^(-J14))))",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C14",
                            "value": "-($G$14*$H$14/(1-((1+$I$14)^(-$J$14))))",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D14",
                            "value": -5,
                            "formula": "-(G14*H14/(1-((1+I14)^(-J14))))",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R11.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R11.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E14",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F14",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G14",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H14",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I14",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J14",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K14",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 14,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A15",
                            "value": "VLOOKUP",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B15",
                            "value": "VLOOKUP(G15,I12:K15,2,FALSE)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C15",
                            "value": "VLOOKUP(G15,I12:K15,2,0)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D15",
                            "value": 31,
                            "formula": "VLOOKUP(G15,I12:K15,2,FALSE)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R12.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R12.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E15",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F15",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G15",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H15",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I15",
                            "value": 1,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J15",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K15",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 15,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A16",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B16",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C16",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D16",
                            "index": 3,
                            "style": {
                              "format": "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E16",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F16",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G16",
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H16",
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I16",
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J16",
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K16",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 16,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A17",
                            "value": "CONCATENATE",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B17",
                            "value": "CONCATENATE(G17,H17,I17,J17,K17)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C17",
                            "value": "CONCATENATE($G$17,H$17,$I17,J17,K$17)",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D17",
                            "value": "1-1000153114",
                            "formula": "CONCATENATE(G17,H17,I17,J17,K17)",
                            "index": 3,
                            "style": {
                              "format": "0%",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R13.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R13.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E17",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F17",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G17",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H17",
                            "value": -1000,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I17",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J17",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K17",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 17,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A18",
                            "value": "BASE",
                            "index": 0,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B18",
                            "value": "BASE(100,H18)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C18",
                            "value": "BASE(G18,H18)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D18",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E18",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F18",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G18",
                            "value": 100,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H18",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I18",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J18",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K18",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 18,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A19",
                            "value": "AVERAGE",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B19",
                            "value": "AVERAGE(G19:K19)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C19",
                            "value": "AVERAGE($G$19:$K$19)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D19",
                            "value": 13.2,
                            "formula": "AVERAGE(G19:K19)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R14.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R14.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E19",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F19",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G19",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H19",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I19",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J19",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K19",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 19,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A20",
                            "value": "MEDIAN",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B20",
                            "value": "MEDIAN(G20:K20)",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C20",
                            "value": "MEDIAN(G20,H20,I20,J20,K20)",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D20",
                            "value": 14,
                            "formula": "MEDIAN(G20:K20)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R15.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R15.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E20",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F20",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G20",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H20",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I20",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J20",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K20",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 20,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A21",
                            "value": "COUNT",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B21",
                            "value": "COUNT(G21:K21)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C21",
                            "value": "COUNT(G21,H21,I21,J21,K21)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D21",
                            "value": 5,
                            "formula": "COUNT(G21:K21)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R16.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R16.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E21",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F21",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G21",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H21",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I21",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J21",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K21",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 21,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A22",
                            "value": "ABS",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B22",
                            "value": "ABS(G22)",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C22",
                            "value": "ABS(1)",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D22",
                            "value": 1,
                            "formula": "ABS(G22)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R17.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R17.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E22",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F22",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G22",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H22",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I22",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J22",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K22",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 22,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A23",
                            "value": "SLOPE",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B23",
                            "value": "SLOPE(G23:H23,I23:J23)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C23",
                            "value": "SLOPE($G$23:$H$23,$I$23:$J$23)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D23",
                            "value": 0.25,
                            "formula": "SLOPE(G23:H23,I23:J23)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R18.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R18.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E23",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F23",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G23",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H23",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I23",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J23",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K23",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 23,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A24",
                            "value": "XNPV",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B24",
                            "value": "XNPV(I24,H24:H26,G24:G26)",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C24",
                            "value": "XNPV(20,H24:H26,G24:G26)",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D24",
                            "value": 215728.26154611408,
                            "formula": "XNPV(I24,H24:H26,G24:G26)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R19.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R19.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E24",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F24",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G24",
                            "value": 43687,
                            "index": 6,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "mm-dd-yy",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H24",
                            "value": -3248,
                            "index": 7,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I24",
                            "value": 20,
                            "index": 8,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J24",
                            "value": 0,
                            "index": 9,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K24",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 24,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A25",
                            "value": "SQRT",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B25",
                            "value": "SQRT(H23)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C25",
                            "value": "SQRT(5)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D25",
                            "value": 2.23606797749979,
                            "formula": "SQRT(H23)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R20.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R20.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E25",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F25",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G25",
                            "value": 43718,
                            "index": 6,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "mm-dd-yy",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H25",
                            "value": 256236,
                            "index": 7,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I25",
                            "index": 8,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J25",
                            "index": 9,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K25",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 25,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A26",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B26",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C26",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D26",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E26",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F26",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G26",
                            "value": 43748,
                            "index": 6,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "mm-dd-yy",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H26",
                            "value": 35135,
                            "index": 7,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I26",
                            "index": 8,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J26",
                            "index": 9,
                            "style": {
                              "wrap": true,
                              "textAlign": "center",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K26",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 26,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A27",
                            "value": "PMT",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B27",
                            "value": "PMT(H27,I27,J27,,1)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C27",
                            "value": "PMT(H27,I27,J27,0,1)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D27",
                            "value": -25.83333333338828,
                            "formula": "PMT(H27,I27,J27,,1)",
                            "index": 3,
                            "style": {
                              "format": "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R21.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R21.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E27",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F27",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G27",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H27",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I27",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J27",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K27",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 27,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A28",
                            "value": "STDEV.S",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B28",
                            "value": "STDEV.S(G28:K28)",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C28",
                            "value": "STDEV.S(G28,H28,I28,J28,K28)",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D28",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E28",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F28",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G28",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H28",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I28",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J28",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K28",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 28,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A29",
                            "value": "VAR.P",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B29",
                            "value": "VAR.P(G29:K29)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C29",
                            "value": "VAR.P(G29,H29,I29,J29,K29)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D29",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E29",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F29",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G29",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H29",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I29",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J29",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K29",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 29,
                        "visible": true,
                        "height": 40,
                        "#cells": [
                          {
                            "ref": "A30",
                            "value": "HLOOKUP",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B30",
                            "value": "HLOOKUP(G30,H30:K32,3,FALSE)",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C30",
                            "value": "HLOOKUP($G$30,$H$30:$K$32,3,0)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D30",
                            "value": "check",
                            "formula": "HLOOKUP(G30,H30:K32,3,FALSE)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R22.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R22.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E30",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F30",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G30",
                            "value": 3,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H30",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I30",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J30",
                            "value": 3,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K30",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 30,
                        "visible": true,
                        "height": 60,
                        "#cells": [
                          {
                            "ref": "A31",
                            "value": "Complex formula 1",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B31",
                            "value": "ROUND(IF(OR(I31=\"15\",I31=\"Manor\"),K31*Sheet2!$A$2/12,F32*Sheet2!$C$2/12),2)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C31",
                            "value": "ROUND(IF(OR($I$31=\"15\",$I$31=\"Manor\"),$K$31*Sheet2!$A$2/12,F32*Sheet2!$C$2/12),2)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D31",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E31",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F31",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G31",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H31",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I31",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J31",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K31",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 31,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A32",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B32",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C32",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D32",
                            "index": 3,
                            "style": {
                              "format": "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E32",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F32",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G32",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H32",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I32",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J32",
                            "value": "check",
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K32",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 32,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A33",
                            "value": "Nested Formula",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B33",
                            "value": "SUM(SUM(G33:I33),J33,K33)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C33",
                            "value": "SUM(SUM(G33:I33),J33:K33)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D33",
                            "value": 66,
                            "formula": "SUM(SUM(G33:I33),J33,K33)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R23.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R23.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E33",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F33",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G33",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H33",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I33",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J33",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K33",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 33,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A34",
                            "value": "Named Reference",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B34",
                            "value": "test3",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C34",
                            "value": "test4",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D34",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E34",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F34",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G34",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H34",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I34",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J34",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K34",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 34,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A35",
                            "value": "Direct Reference",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B35",
                            "value": "G35",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C35",
                            "value": "$G$35",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D35",
                            "value": 1,
                            "formula": "G35",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R24.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R24.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E35",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F35",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G35",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H35",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I35",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J35",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K35",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 35,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A36",
                            "value": "Worksheet Name",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B36",
                            "value": "Sheet2!A2",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C36",
                            "value": "Sheet2!A$2",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D36",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E36",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F36",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G36",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H36",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I36",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J36",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K36",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 36,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A37",
                            "value": "MarkOff Case 1",
                            "index": 0,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B37",
                            "value": "SUM(G37:K37)",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C37",
                            "value": "SUM(G37,H37,I37,J37)",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D37",
                            "value": 66,
                            "formula": "SUM(G37:K37)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R25.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R25.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E37",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F37",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G37",
                            "value": 1,
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H37",
                            "value": 5,
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I37",
                            "value": 15,
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J37",
                            "value": 31,
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K37",
                            "value": 14,
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 37,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A38",
                            "value": "MarkOff Case 2",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B38",
                            "value": "VLOOKUP(G15,I12:K15,2,FALSE)",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C38",
                            "value": "VLOOKUP(G15,I12:K15,1,FALSE)",
                            "index": 2,
                            "style": {
                              "textAlign": "left",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D38",
                            "value": 31,
                            "formula": "VLOOKUP(G15,I12:K15,2,FALSE)",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R26.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R26.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E38",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F38",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G38",
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H38",
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I38",
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J38",
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K38",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 38,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A39",
                            "value": "MarkOff Case 3 - Value",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B39",
                            "value": "NOW()",
                            "index": 1,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C39",
                            "value": "NOW()",
                            "index": 2,
                            "style": {
                              "background": "#F5F5F5",
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D39",
                            "value": 43826.76735462963,
                            "formula": "NOW()",
                            "index": 3,
                            "style": {
                              "format": "m/d/yy h:mm",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            },
                            "validations": [
                              {
                                "id": "R27.1",
                                "validate": "cell.value",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true,
                                  "trimWhitespace": true
                                }
                              },
                              {
                                "id": "R27.2",
                                "validate": "cell.formula",
                                "operator": "equals",
                                "extrainfo": {
                                  "ignoreCase": true
                                }
                              }
                            ]
                          },
                          {
                            "ref": "E39",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F39",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G39",
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H39",
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I39",
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J39",
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K39",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 39,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A40",
                            "index": 0,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B40",
                            "index": 1,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C40",
                            "index": 2,
                            "style": {
                              "wrap": true,
                              "textAlign": "left",
                              "verticalAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D40",
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E40",
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "F40",
                            "index": 5,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "G40",
                            "index": 6,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "H40",
                            "index": 7,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "I40",
                            "index": 8,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "J40",
                            "index": 9,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "K40",
                            "index": 10,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      }
                    ],
                    "#columns": [
                      {
                        "visible": true,
                        "width": 169,
                        "index": 0
                      },
                      {
                        "visible": true,
                        "width": 203,
                        "index": 1
                      },
                      {
                        "visible": true,
                        "width": 295,
                        "index": 2
                      },
                      {
                        "visible": true,
                        "width": 134,
                        "index": 3
                      },
                      {
                        "visible": true,
                        "width": 134,
                        "index": 4
                      },
                      {
                        "visible": true,
                        "width": 134,
                        "index": 5
                      },
                      {
                        "visible": true,
                        "width": 79,
                        "index": 6
                      },
                      {
                        "visible": true,
                        "width": 79,
                        "index": 7
                      },
                      {
                        "visible": true,
                        "width": 79,
                        "index": 8
                      },
                      {
                        "visible": true,
                        "width": 79,
                        "index": 9
                      },
                      {
                        "visible": true,
                        "width": 79,
                        "index": 10
                      }
                    ]
                  },
                  {
                    "name": "Sheet2",
                    "id": "sidZ29puaJ",
                    "maxColIndexEdited": 4,
                    "maxRowIndexEdited": 5,
                    "selection": "C14:C14",
                    "activeCell": "C14:C14",
                    "frozenRows": 0,
                    "frozenColumns": 0,
                    "showGridLines": true,
                    "defaults": {
                      "columnWidth": 64,
                      "rowHeight": 20,
                      "cellStyle": {
                        "wrap": false,
                        "textAlign": "general",
                        "verticalAlign": "bottom"
                      },
                      "cellFontAttrs": {
                        "family": "Calibri",
                        "size": 11,
                        "color": "#000000",
                        "bold": false,
                        "italic": false
                      }
                    },
                    "#rows": [
                      {
                        "index": 0,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A1",
                            "value": "Parameter1",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B1",
                            "value": "Parameter2",
                            "index": 1,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C1",
                            "value": "Parameter3",
                            "index": 2,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D1",
                            "value": "Parameter4",
                            "index": 3,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E1",
                            "value": "Parameter5",
                            "index": 4,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#d0cece",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 1,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A2",
                            "value": 1,
                            "index": 0,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B2",
                            "value": 5,
                            "index": 1,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C2",
                            "value": 15,
                            "index": 2,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D2",
                            "value": 31,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E2",
                            "value": 14,
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 2,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A3",
                            "value": 1,
                            "index": 0,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B3",
                            "value": 5,
                            "index": 1,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C3",
                            "value": 15,
                            "index": 2,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D3",
                            "value": 31,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E3",
                            "value": 14,
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 3,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A4",
                            "value": 1,
                            "index": 0,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B4",
                            "value": 5,
                            "index": 1,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C4",
                            "value": 15,
                            "index": 2,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D4",
                            "value": 31,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E4",
                            "value": 14,
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 4,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A5",
                            "value": 1,
                            "index": 0,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B5",
                            "value": 5,
                            "index": 1,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C5",
                            "value": 15,
                            "index": 2,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D5",
                            "value": 31,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E5",
                            "value": 14,
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "index": 5,
                        "visible": true,
                        "height": 20,
                        "#cells": [
                          {
                            "ref": "A6",
                            "value": 1,
                            "index": 0,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B6",
                            "value": 5,
                            "index": 1,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "C6",
                            "value": 15,
                            "index": 2,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "D6",
                            "value": 31,
                            "index": 3,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "E6",
                            "value": 14,
                            "index": 4,
                            "style": {
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                },
                                "top": {
                                  "type": "thin"
                                }
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          }
        },
        "validation": {
          "validResponse": {
            "resource": "RE2"
          },
          "rules": {
            "type": "Sum",
            "score": 100,
            "rules": [
              {
                "score": 3,
                "rules": [
                  {
                    "score": 1,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"66\".",
                      "failureText": "Cell Text should be \"66\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R1.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"SUM(G2:K2)\".",
                      "failureText": "Formula applied should be \"SUM(G2:K2)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R1.2"
                  }
                ],
                "type": "Sum",
                "id": "R1"
              },
              {
                "score": 3,
                "rules": [
                  {
                    "score": 1,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"66\".",
                      "failureText": "Cell Text should be \"66\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R2.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"SUM(G3:K3)\".",
                      "failureText": "Formula applied should be \"SUM(G3:K3)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R2.2"
                  }
                ],
                "type": "Sum",
                "id": "R2"
              },
              {
                "score": 3,
                "rules": [
                  {
                    "score": 1,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"66\".",
                      "failureText": "Cell Text should be \"66\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R3.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"SUM(G4:K4)\".",
                      "failureText": "Formula applied should be \"SUM(G4:K4)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R3.2"
                  }
                ],
                "type": "Sum",
                "id": "R3"
              },
              {
                "score": 3,
                "rules": [
                  {
                    "score": 1,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"66\".",
                      "failureText": "Cell Text should be \"66\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R4.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"SUM(G6:K6)\".",
                      "failureText": "Formula applied should be \"SUM(G6:K6)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R4.2"
                  }
                ],
                "type": "Sum",
                "id": "R4"
              },
              {
                "score": 3,
                "rules": [
                  {
                    "score": 3,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"66\".",
                      "failureText": "Cell Text should be \"66\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R5.1"
                  }
                ],
                "type": "Sum",
                "id": "R5"
              },
              {
                "score": 3,
                "rules": [
                  {
                    "score": 3,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"56\".",
                      "failureText": "Cell Text should be \"56\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R6.1"
                  }
                ],
                "type": "Sum",
                "id": "R6"
              },
              {
                "score": 3,
                "rules": [
                  {
                    "score": 3,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"30\".",
                      "failureText": "Cell Text should be \"30\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R7.1"
                  }
                ],
                "type": "Sum",
                "id": "R7"
              },
              {
                "score": 3,
                "rules": [
                  {
                    "score": 3,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"66\".",
                      "failureText": "Cell Text should be \"66\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R8.1"
                  }
                ],
                "type": "Sum",
                "id": "R8"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 4,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"37\".",
                      "failureText": "Cell Text should be \"37\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R9.1"
                  }
                ],
                "type": "Sum",
                "id": "R9"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 4,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"66\".",
                      "failureText": "Cell Text should be \"66\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R10.1"
                  }
                ],
                "type": "Sum",
                "id": "R10"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"-5\".",
                      "failureText": "Cell Text should be \"-5\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R11.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"-(G14*H14/(1-((1+I14)^(-J14))))\".",
                      "failureText": "Formula applied should be \"-(G14*H14/(1-((1+I14)^(-J14))))\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R11.2"
                  }
                ],
                "type": "Sum",
                "id": "R11"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"31\".",
                      "failureText": "Cell Text should be \"31\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R12.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"VLOOKUP(G15,I12:K15,2,FALSE)\".",
                      "failureText": "Formula applied should be \"VLOOKUP(G15,I12:K15,2,FALSE)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R12.2"
                  }
                ],
                "type": "Sum",
                "id": "R12"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"1-1000153114\".",
                      "failureText": "Cell Text should be \"1-1000153114\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R13.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"CONCATENATE(G17,H17,I17,J17,K17)\".",
                      "failureText": "Formula applied should be \"CONCATENATE(G17,H17,I17,J17,K17)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R13.2"
                  }
                ],
                "type": "Sum",
                "id": "R13"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"13.2\".",
                      "failureText": "Cell Text should be \"13.2\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R14.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"AVERAGE(G19:K19)\".",
                      "failureText": "Formula applied should be \"AVERAGE(G19:K19)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R14.2"
                  }
                ],
                "type": "Sum",
                "id": "R14"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"14\".",
                      "failureText": "Cell Text should be \"14\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R15.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"MEDIAN(G20:K20)\".",
                      "failureText": "Formula applied should be \"MEDIAN(G20:K20)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R15.2"
                  }
                ],
                "type": "Sum",
                "id": "R15"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"5\".",
                      "failureText": "Cell Text should be \"5\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R16.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"COUNT(G21:K21)\".",
                      "failureText": "Formula applied should be \"COUNT(G21:K21)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R16.2"
                  }
                ],
                "type": "Sum",
                "id": "R16"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"1\".",
                      "failureText": "Cell Text should be \"1\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R17.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"ABS(G22)\".",
                      "failureText": "Formula applied should be \"ABS(G22)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R17.2"
                  }
                ],
                "type": "Sum",
                "id": "R17"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"0.25\".",
                      "failureText": "Cell Text should be \"0.25\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R18.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"SLOPE(G23:H23,I23:J23)\".",
                      "failureText": "Formula applied should be \"SLOPE(G23:H23,I23:J23)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R18.2"
                  }
                ],
                "type": "Sum",
                "id": "R18"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"215728.26154611408\".",
                      "failureText": "Cell Text should be \"215728.26154611408\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R19.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"XNPV(I24,H24:H26,G24:G26)\".",
                      "failureText": "Formula applied should be \"XNPV(I24,H24:H26,G24:G26)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R19.2"
                  }
                ],
                "type": "Sum",
                "id": "R19"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"2.23606797749979\".",
                      "failureText": "Cell Text should be \"2.23606797749979\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R20.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"SQRT(H23)\".",
                      "failureText": "Formula applied should be \"SQRT(H23)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R20.2"
                  }
                ],
                "type": "Sum",
                "id": "R20"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"-25.83333333338828\".",
                      "failureText": "Cell Text should be \"-25.83333333338828\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R21.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"PMT(H27,I27,J27,,1)\".",
                      "failureText": "Formula applied should be \"PMT(H27,I27,J27,,1)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R21.2"
                  }
                ],
                "type": "Sum",
                "id": "R21"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"check\".",
                      "failureText": "Cell Text should be \"check\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R22.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"HLOOKUP(G30,H30:K32,3,FALSE)\".",
                      "failureText": "Formula applied should be \"HLOOKUP(G30,H30:K32,3,FALSE)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R22.2"
                  }
                ],
                "type": "Sum",
                "id": "R22"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"66\".",
                      "failureText": "Cell Text should be \"66\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R23.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"SUM(SUM(G33:I33),J33,K33)\".",
                      "failureText": "Formula applied should be \"SUM(SUM(G33:I33),J33,K33)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R23.2"
                  }
                ],
                "type": "Sum",
                "id": "R23"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"1\".",
                      "failureText": "Cell Text should be \"1\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R24.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"G35\".",
                      "failureText": "Formula applied should be \"G35\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R24.2"
                  }
                ],
                "type": "Sum",
                "id": "R24"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"66\".",
                      "failureText": "Cell Text should be \"66\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R25.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"SUM(G37:K37)\".",
                      "failureText": "Formula applied should be \"SUM(G37:K37)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R25.2"
                  }
                ],
                "type": "Sum",
                "id": "R25"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"31\".",
                      "failureText": "Cell Text should be \"31\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R26.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"VLOOKUP(G15,I12:K15,2,FALSE)\".",
                      "failureText": "Formula applied should be \"VLOOKUP(G15,I12:K15,2,FALSE)\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R26.2"
                  }
                ],
                "type": "Sum",
                "id": "R26"
              },
              {
                "score": 4,
                "rules": [
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"43826.76735462963\".",
                      "failureText": "Cell Text should be \"43826.76735462963\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R27.1"
                  },
                  {
                    "score": 2,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Formula applied should be \"NOW()\".",
                      "failureText": "Formula applied should be \"NOW()\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true
                    },
                    "id": "R27.2"
                  }
                ],
                "type": "Sum",
                "id": "R27"
              }
            ]
          },
          "graderSettings": {
            "version": "1.0.0",
            "name": "DefaultGradingEngine",
            "matchSettings": {
              "matcher": "DefaultOOOMatcher",
              "matchingStrategies": {
                "#sheets": {
                  "type": "SheetOOOMatchingStrategy",
                  "textWeightage": ""
                },
                "#rows": {
                  "type": "RowOOOMatchingStrategy",
                  "textWeightage": 0.8,
                  "cellRefWeightage": 0.2
                },
                "#cells": {
                  "type": "CellOOOMatchingStrategy",
                  "textWeightage": 0.8,
                  "cellRefWeightage": 0.2
                }
              }
            }
          }
        }
      }
    }
  }
};
