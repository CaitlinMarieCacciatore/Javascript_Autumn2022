const poland1897 = {
  "type": "FeatureCollection",
    "metadata": {
      "idinfo": {
        "citation": {
          "citeinfo": {
            "origin": "Paul Thomas Dziemiela",
            "pubdate": 19980501,
            "title": "Interwar Poland Powiats (Districts)",
            "pubinfo": {
              "pubplace": "Madison, WI",
              "publish": "Paul Thomas Dziemiela"
            },
            "onlink": "",
            "ftname": "Polen_1897",
            "geoform": "vector digital data"
          }
        },
        "descript": {
          "abstract": "Created for cartographic purposes.",
          "purpose": "Used for mapping purposes.",
          "langdata": "de"
        },
        "timeperd": {
          "timeinfo": {
            "rngdates": {
              "begdate": 1921,
              "enddate": 1939
            },
            "sngdate": {
              "caldate": "REQUIRED: The year (and optionally month, or month and day) for which the data set corresponds to the ground."
            }
          },
          "current": "Ground condition"
        },
        "status": {
          "progress": "Complete",
          "update": "None Planned"
        },
        "spdom": {
          "bounding": {
            "westbc": 15.335378,
            "eastbc": 28.599944,
            "northbc": 56.081117,
            "southbc": 47.54695
          }
        },
        "keywords": {
          "theme": {
            "themekt": "ISO 19115 Topic Category",
            "themekey": "boundaries"
          }
        },
        "accconst": "None.",
        "useconst": "None. Please check sources, scale, accuracy, currentness and other available information. Acknowledgement of the author would be appreciated.",
        "secinfo": {
          "secsys": "FIPS Pub 199",
          "secclass": "No Confidentiality",
          "sechandl": "Standard Technical Controls"
        },
        "native": "Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 3; ESRI ArcCatalog 9.2.6.1500",
        "natvform": "Shapefile"
      },
      "dataqual": {
        "logic": "None",
        "complete": "Unknown",
        "posacc": {
          "horizpa": {
            "horizpar": "Unknown."
          },
          "vertacc": {
            "vertaccr": "Unknown."
          }
        },
        "lineage": {
          "srcinfo": {
            "srccite": {
              "citeinfo": {
                "origin": "Wojskowy Instytut Geograficznego",
                "pubdate": 1934,
                "title": "Mapa Rzeczypospolitej Polskiej"
              }
            },
            "typesrc": "paper map",
            "srctime": {
              "timeinfo": {
                "sngdate": {
                  "caldate": 1934
                }
              },
              "srccurr": "Publication Date"
            },
            "srccitea": "Poland",
            "srccontr": "Basemap used in digitizing feature layer."
          },
          "procstep": [
            {
              "procdesc": "Layer digitized using ArcView 3.2.",
              "srcused": "Poland",
              "procdate": 19980501
            },
            {
              "procdesc": "Metadata imported.",
              "srcused": "C:\\Documents and Settings\\PDziemiela\\Desktop\\ipcountries2.xml",
              "procdate": 20100916,
              "proctime": 18234300
            },
            {
              "procdesc": "Dataset copied.",
              "srcused": "",
              "date": 20110825,
              "time": 9150500
            },
            {
              "procdesc": "Dataset copied.",
              "srcused": "",
              "date": 20110912,
              "time": 8545700
            },
            {
              "procdesc": "Dataset copied.",
              "srcused": "",
              "date": 20110920,
              "time": 10371100
            }
          ]
        }
      },
      "spdoinfo": {
        "direct": "Vector",
        "ptvctinf": {
          "sdtsterm": {
            "sdtstype": "G-polygon",
            "ptvctcnt": 11
          },
          "esriterm": {
            "efeatyp": "Simple",
            "efeageom": "Polygon",
            "esritopo": "FALSE",
            "efeacnt": 0,
            "spindex": "FALSE",
            "linrefer": "FALSE"
          }
        }
      },
      "spref": {
        "horizsys": {
          "geodetic": {
            "horizdn": "D_WGS_1984",
            "ellips": "WGS_1984",
            "semiaxis": 6378137,
            "denflat": 298.257224
          },
          "cordsysn": {
            "geogcsn": "GCS_WGS_1984",
            "projcsn": "WGS_1984_UTM_Zone_33N"
          },
          "planar": {
            "planci": {
              "plance": "coordinate pair",
              "plandu": "meters",
              "coordrep": {
                "absres": 0,
                "ordres": 0
              }
            },
            "gridsys": {
              "gridsysn": "Universal Transverse Mercator",
              "utm": {
                "utmzone": 33,
                "transmer": {
                  "sfctrmer": 0.9996,
                  "longcm": 15,
                  "latprjo": 0,
                  "feast": 500000,
                  "fnorth": 0
                }
              }
            }
          }
        }
      },
      "eainfo": {
        "detailed": {
          "enttyp": {
            "enttypl": "ipcountries",
            "enttypd": "Table",
            "enttypds": "Table",
            "enttypt": "Feature Class",
            "enttypc": 0
          },
          "attr": [
            {
              "attrlabl": "Shape",
              "attrdef": "Feature geometry.",
              "attrdefs": "ESRI",
              "attrdomv": {
                "udom": "Coordinates defining the features."
              }
            },
            {
              "attrlabl": "ID_",
              "attalias": "ID_",
              "attrtype": "String",
              "attwidth": 16,
              "atprecis": 0,
              "attscale": 0
            },
            {
              "attrlabl": "NAME1_",
              "attalias": "NAME1_",
              "attrtype": "String",
              "attwidth": 16
            },
            {
              "attrlabl": "AREA",
              "attalias": "AREA",
              "attrtype": "String",
              "attwidth": 64
            },
            {
              "attrlabl": "Shape_Area",
              "attalias": "Shape_Area",
              "attrtype": "Float",
              "attwidth": 19,
              "attrdef": "Area of feature in internal units squared.",
              "attrdefs": "ESRI",
              "attrdomv": {
                "udom": "Positive real numbers that are automatically generated."
              },
              "atnumdec": 11
            },
            {
              "attrlabl": "PERIMETER",
              "attalias": "PERIMETER",
              "attrtype": "Float",
              "attwidth": 19,
              "atnumdec": 11
            },
            {
              "attrlabl": "FID",
              "attalias": "FID",
              "attrtype": "Float",
              "attwidth": 19,
              "attrdef": "Internal feature number.",
              "attrdefs": "ESRI",
              "attrdomv": {
                "udom": "Sequential unique whole numbers that are automatically generated."
              },
              "atnumdec": 11
            },
            {
              "attrlabl": "Shape_Leng",
              "attalias": "Shape_Leng",
              "attrtype": "Float",
              "attwidth": 19,
              "atnumdec": 11
            }
          ]
        }
      },
      "metainfo": {
        "metd": 20100916,
        "metfrd": 20140916,
        "metc": {
          "cntinfo": {
            "cntorgp": {
              "cntorg": "None",
              "cntper": "REQUIRED: The person responsible for the metadata information."
            },
            "cntaddr": {
              "addrtype": "mailing address",
              "address": "None",
              "city": "Nowhere",
              "state": "WI",
              "postal": 12345
            },
            "cntvoice": "1-999-999-9999",
            "cntemail": "paul@dziemiela.com"
          }
        },
        "metstdn": "FGDC Content Standards for Digital Geospatial Metadata",
        "metstdv": "FGDC-STD-001-1998",
        "langmeta": "de",
        "mettc": "local time",
        "metextns": {
          "onlink": "http://www.esri.com/metadata/esriprof80.html",
          "metprof": "ESRI Metadata Profile"
        }
      },
      "Esri": {
        "CreaDate": 20110920,
        "CreaTime": 10371100,
        "SyncOnce": "FALSE",
        "SyncDate": 20110920,
        "SyncTime": 9352400,
        "ModDate": 20110920,
        "ModTime": 9352400,
        "DataProperties": {
          "lineage": {
            "Process": [
              "CopyFeatures Polen_1897 \"W:\\Geodatabase dt. Reich\\deutsches_Reich.mdb\\Polen_1897\" # 0 0 0",
              "CopyFeatures \"W:\\Geodatabase dt. Reich\\deutsches_Reich.mdb\\Polen_1897\" \"W:\\Geodatabase dt. Reich\\Polen_1897.shp\" # 0 0 0"
            ]
          }
        },
        "MetaID": "{C7F1E298-D748-4685-8ED1-59674C5A3ED9}"
      },
      "distInfo": {
        "distributor": {
          "distorTran": {
            "onLineSrc": {
              "linkage": "file://",
              "protocol": "Local Area Network",
              "orDesc": 2
            },
            "transSize": "0,000"
          },
          "distorFormat": {
            "formatName": "Shapefile"
          }
        }
      },
      "dataIdInfo": {
        "envirDesc": "Microsoft Windows XP Version 5.1 (Build 2600) Service Pack 3; ESRI ArcCatalog 9.2.6.1500",
        "dataLang": {
          "languageCode": ""
        },
        "idCitation": {
          "resTitle": "Polen_1897",
          "presForm": {
            "PresFormCd": ""
          }
        },
        "spatRpType": {
          "SpatRepTypCd": ""
        }
      },
      "mdLang": {
        "languageCode": ""
      },
      "mdStanName": "ISO 19115 Geographic Information - Metadata",
      "mdStanVer": "DIS_ESRI1.0",
      "mdChar": {
        "CharSetCd": ""
      },
      "mdHrLv": {
        "ScopeCd": ""
      },
      "mdHrLvName": "dataset",
      "distinfo": {
        "resdesc": "Downloadable Data",
        "stdorder": {
          "digform": {
            "digtinfo": {
              "transize": "0,000",
              "dssize": "0,000"
            }
          }
        }
      },
      "refSysInfo": {
        "RefSystem": {
          "refSysID": {
            "identCode": "WGS_1984_UTM_Zone_33N"
          }
        }
      },
      "spatRepInfo": {
        "VectSpatRep": {
          "topLvl": {
            "TopoLevCd": ""
          },
          "geometObjs": {
            "geoObjTyp": {
              "GeoObjTypCd": ""
            },
            "geoObjCnt": 0
          }
        }
      },
      "mdDateSt": 20110920
    }
  }