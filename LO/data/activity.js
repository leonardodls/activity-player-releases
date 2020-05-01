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
        "leonardoId": "comproqa-dev-903",
        "orgId": "compro",
        "revision": 1,
        "type": "item",
        "model": "spreadsheet-question",
        "editor": "spreadsheet-question-editor",
        "player": "spreadsheet-question-player",
        "meta": {
          "title": "test",
          "description": "",
          "tags": {
            "custom": []
          },
          "source": {
            "paint-id": "comproqa-dev-903",
            "paint-id-revision": 1
          }
        },
        "widgetStyles": {
          "hAlign": "left",
          "vAlign": "top"
        },
        "templateType": "gridOnly",
        "templatePreferences": {
          "splitter": {
            "visible": false
          }
        },
        "templateData": {
          "instructions": {
            "type": "leoHTML"
          },
          "leonardoSpreadsheet": {
            "resource": "RE1",
            "preferences": {
              "ribbon": {
                "visible": true,
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
                "displayMode": "spreadsheet",
                "rowHeader": false,
                "colHeader": false,
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
                "activeSheet": "Solution",
                "names": [
                  {
                    "name": "LOCAL_MYSQL_DATE_FORMAT",
                    "range": "REPT(LOCAL_YEAR_FORMAT,4)&LOCAL_DATE_SEPARATOR&REPT(LOCAL_MONTH_FORMAT,2)&LOCAL_DATE_SEPARATOR&REPT(LOCAL_DAY_FORMAT,2)&\" \"&REPT(LOCAL_HOUR_FORMAT,2)&LOCAL_TIME_SEPARATOR&REPT(LOCAL_MINUTE_FORMAT,2)&LOCAL_TIME_SEPARATOR&REPT(LOCAL_SECOND_FORMAT,2)"
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
                    "name": "Solution",
                    "id": "sid1PpMYg",
                    "maxColIndexEdited": 4,
                    "maxRowIndexEdited": 23,
                    "selection": "D22:D22",
                    "activeCell": "D22:D22",
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
                            "value": "Journal Entry",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "index": 1,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "index": 2,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "index": 3,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
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
                            "value": "Date",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Accounts",
                            "index": 1,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Debit",
                            "index": 2,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Credit",
                            "index": 3,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
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
                            "value": "a.",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B3",
                            "value": "Raw Materials Inventory",
                            "index": 1,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B4",
                            "value": "Accounts Payable",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B5",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C5",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D5",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "value": "b.",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C6",
                            "value": 167000,
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D6",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B7",
                            "value": "Manufacturing Overhead",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C7",
                            "value": 27000,
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D7",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B8",
                            "value": "Raw Materials Inventory",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C8",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D8",
                            "value": 194000,
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B9",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C9",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D9",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "value": "c.",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Work in Process Inventory",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C10",
                            "value": 215000,
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D10",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B11",
                            "value": "Manufacturing Overhead",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C11",
                            "value": 45000,
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D11",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B12",
                            "value": "Wages Payable",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C12",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D12",
                            "value": 260000,
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B13",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C13",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D13",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "value": "d.",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Manufacturing Overhead",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C14",
                            "value": 26000,
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D14",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B15",
                            "value": "Accumulated Depreciation",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C15",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D15",
                            "value": 17000,
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B16",
                            "value": "Utilities Payable",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C16",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D16",
                            "value": 9000,
                            "index": 3,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "E16",
                            "index": 4,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B17",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C17",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D17",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "value": "e.",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Work in Process Inventory",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C18",
                            "value": 92000,
                            "index": 2,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B19",
                            "value": "Manufacturing Overhead",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C19",
                            "index": 2
                          },
                          {
                            "ref": "D19",
                            "value": 92000,
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
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
                            "value": "f.",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Website Expense",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C21",
                            "value": 3000,
                            "index": 2,
                            "style": {
                              "format": "General"
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
                            "index": 0
                          },
                          {
                            "ref": "B22",
                            "value": "Accounts Payable",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
                            }
                          }
                        ]
                      },
                      {
                        "index": 22,
                        "visible": true,
                        "#cells": [
                          {
                            "ref": "A23",
                            "index": 0
                          }
                        ]
                      },
                      {
                        "index": 23,
                        "visible": true,
                        "height": 80,
                        "#cells": [
                          {
                            "ref": "A24",
                            "value": "Manufacturing overhead overallocated or underallocated = ",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "wrap": true,
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": 6000,
                            "index": 1,
                            "style": {
                              "format": "_(\"$\"* #,##0.00_);_(\"$\"* \\(#,##0.00\\);_(\"$\"* \"-\"??_);_(@_)"
                            }
                          },
                          {
                            "ref": "C24",
                            "value": "Underallocated",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          }
                        ]
                      }
                    ],
                    "#columns": [
                      {
                        "visible": true,
                        "width": 154,
                        "index": 0
                      },
                      {
                        "visible": true,
                        "width": 219,
                        "index": 1
                      },
                      {
                        "visible": true,
                        "width": 103,
                        "index": 2
                      },
                      {
                        "visible": true,
                        "width": 104,
                        "index": 3
                      }
                    ],
                    "#mergedCells": [
                      "A1:D1"
                    ],
                    "extraInfo": {
                      "id": "sid1PpMYg"
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
                "activeSheet": "Solution",
                "names": [
                  {
                    "name": "LOCAL_MYSQL_DATE_FORMAT",
                    "range": "REPT(LOCAL_YEAR_FORMAT,4)&LOCAL_DATE_SEPARATOR&REPT(LOCAL_MONTH_FORMAT,2)&LOCAL_DATE_SEPARATOR&REPT(LOCAL_DAY_FORMAT,2)&\" \"&REPT(LOCAL_HOUR_FORMAT,2)&LOCAL_TIME_SEPARATOR&REPT(LOCAL_MINUTE_FORMAT,2)&LOCAL_TIME_SEPARATOR&REPT(LOCAL_SECOND_FORMAT,2)"
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
                    "name": "Solution",
                    "id": "sid1PpMYg",
                    "maxColIndexEdited": 4,
                    "maxRowIndexEdited": 23,
                    "selection": "B16:B16",
                    "activeCell": "B16:B16",
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
                            "value": "Journal Entry",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "index": 1,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "index": 2,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "index": 3,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
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
                            "value": "Date",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Accounts",
                            "index": 1,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Debit",
                            "index": 2,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Credit",
                            "index": 3,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
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
                            "value": "a.",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
                                  "type": "thin"
                                }
                              }
                            }
                          },
                          {
                            "ref": "B3",
                            "value": "Raw Materials Inventory",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C3",
                            "value": 195000,
                            "index": 2,
                            "style": {
                              "format": "General"
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
                              }
                            ]
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B4",
                            "value": "Accounts Payable",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C4",
                            "index": 2
                          },
                          {
                            "ref": "D4",
                            "value": 195000,
                            "index": 3,
                            "style": {
                              "format": "General"
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
                              }
                            ]
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B5",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C5",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D5",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "value": "b.",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Work in Process Inventory",
                            "index": 1,
                            "style": {
                              "format": "General"
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
                              }
                            ]
                          },
                          {
                            "ref": "C6",
                            "value": 167000,
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D6",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B7",
                            "value": "Manufacturing Overhead",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C7",
                            "value": 27000,
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D7",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B8",
                            "value": "Raw Materials Inventory",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C8",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D8",
                            "value": 194000,
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B9",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C9",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D9",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "value": "c.",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Work in Process Inventory",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C10",
                            "value": 215000,
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D10",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B11",
                            "value": "Manufacturing Overhead",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C11",
                            "value": 45000,
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D11",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B12",
                            "value": "Wages Payable",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C12",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D12",
                            "value": 260000,
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B13",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C13",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D13",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "value": "d.",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Manufacturing Overhead",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C14",
                            "value": 26000,
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D14",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B15",
                            "value": "Accumulated Depreciation",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C15",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D15",
                            "value": 17000,
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B16",
                            "value": "Utilities Payable",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C16",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D16",
                            "value": 9000,
                            "index": 3,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "E16",
                            "index": 4,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B17",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C17",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "D17",
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "value": "e.",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Work in Process Inventory",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C18",
                            "value": 92000,
                            "index": 2,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "B19",
                            "value": "Manufacturing Overhead",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C19",
                            "index": 2
                          },
                          {
                            "ref": "D19",
                            "value": 92000,
                            "index": 3,
                            "style": {
                              "format": "General"
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
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "textAlign": "center",
                              "format": "General"
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
                            "value": "f.",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "textAlign": "center",
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": "Website Expense",
                            "index": 1,
                            "style": {
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C21",
                            "value": 3000,
                            "index": 2,
                            "style": {
                              "format": "General"
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
                            "index": 0
                          },
                          {
                            "ref": "B22",
                            "value": "Accounts Payable",
                            "index": 1,
                            "style": {
                              "textAlign": "left",
                              "format": "General"
                            }
                          },
                          {
                            "ref": "C22",
                            "index": 2
                          },
                          {
                            "ref": "D22",
                            "value": 3000,
                            "index": 3,
                            "style": {
                              "format": "General"
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
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "index": 22,
                        "visible": true,
                        "#cells": [
                          {
                            "ref": "A23",
                            "index": 0
                          }
                        ]
                      },
                      {
                        "index": 23,
                        "visible": true,
                        "height": 80,
                        "#cells": [
                          {
                            "ref": "A24",
                            "value": "Manufacturing overhead overallocated or underallocated = ",
                            "index": 0,
                            "fontAttrs": {
                              "def": {
                                "bold": true
                              }
                            },
                            "style": {
                              "background": "#f2f2f2",
                              "wrap": true,
                              "format": "General",
                              "border": {
                                "left": {
                                  "type": "thin"
                                },
                                "right": {
                                  "type": "thin"
                                },
                                "bottom": {
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
                            "value": 6000,
                            "index": 1,
                            "style": {
                              "format": "_(\"$\"* #,##0.00_);_(\"$\"* \\(#,##0.00\\);_(\"$\"* \"-\"??_);_(@_)"
                            }
                          },
                          {
                            "ref": "C24",
                            "value": "Underallocated",
                            "index": 2,
                            "style": {
                              "format": "General"
                            }
                          }
                        ]
                      }
                    ],
                    "#columns": [
                      {
                        "visible": true,
                        "width": 154,
                        "index": 0
                      },
                      {
                        "visible": true,
                        "width": 219,
                        "index": 1
                      },
                      {
                        "visible": true,
                        "width": 103,
                        "index": 2
                      },
                      {
                        "visible": true,
                        "width": 104,
                        "index": 3
                      }
                    ],
                    "#mergedCells": [
                      "A1:D1"
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
                "score": 25,
                "rules": [
                  {
                    "score": 25,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"195000\".",
                      "failureText": "Cell Text should be \"195000\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R1.1"
                  }
                ],
                "type": "Sum",
                "id": "R1"
              },
              {
                "score": 25,
                "rules": [
                  {
                    "score": 25,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"195000\".",
                      "failureText": "Cell Text should be \"195000\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R2.1"
                  }
                ],
                "type": "Sum",
                "id": "R2"
              },
              {
                "score": 25,
                "rules": [
                  {
                    "score": 25,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"Work in Process Inventory\".",
                      "failureText": "Cell Text should be \"Work in Process Inventory\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R3.1"
                  }
                ],
                "type": "Sum",
                "id": "R3"
              },
              {
                "score": 25,
                "rules": [
                  {
                    "score": 25,
                    "type": "Validation",
                    "feedback": {
                      "successText": "Cell Text should be \"3000\".",
                      "failureText": "Cell Text should be \"3000\"."
                    },
                    "toleranceInfo": {
                      "ignoreCase": true,
                      "trimWhitespace": true
                    },
                    "id": "R4.1"
                  }
                ],
                "type": "Sum",
                "id": "R4"
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
