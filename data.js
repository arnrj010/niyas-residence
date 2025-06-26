var APP_DATA = {
  "scenes": [
    {
      "id": "0-formal-living",
      "name": "formal living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.5741411577998932,
        "pitch": -2.1625178270312517e-7,
        "fov": 1.2256404043304827
      },
      "linkHotspots": [
        {
          "yaw": -0.016283375901947394,
          "pitch": -0.025133673159420056,
          "rotation": 3.141592653589793,
          "target": "1-dinning"
        },
        {
          "yaw": 0.3714873696043668,
          "pitch": 0.010290955830335236,
          "rotation": 1.5707963267948966,
          "target": "2-informal-living"
        },
        {
          "yaw": -0.2884691804877981,
          "pitch": -0.059987463388976536,
          "rotation": 10.995574287564278,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dinning",
      "name": "dinning",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.0645766306980917,
        "pitch": 5.329070518200751e-15,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": -0.33452541661267077,
          "pitch": 0.13003387426354962,
          "rotation": 1.5707963267948966,
          "target": "0-formal-living"
        },
        {
          "yaw": -2.0067578653659908,
          "pitch": 0.11167950715572061,
          "rotation": 3.141592653589793,
          "target": "2-informal-living"
        },
        {
          "yaw": 1.175940976901714,
          "pitch": -0.05009166010978916,
          "rotation": 3.141592653589793,
          "target": "3-kitchen"
        },
        {
          "yaw": -0.868446882694478,
          "pitch": -0.0008900709998549416,
          "rotation": 0,
          "target": "8-stair-landing"
        },
        {
          "yaw": -1.331642396744396,
          "pitch": 0.05350956675966856,
          "rotation": 1.5707963267948966,
          "target": "7-prayer-room"
        },
        {
          "yaw": -1.5356025742295607,
          "pitch": 0.047774112634252575,
          "rotation": 4.71238898038469,
          "target": "6-guest-room-01"
        },
        {
          "yaw": -2.5272579596640057,
          "pitch": 0.0661172251436355,
          "rotation": 0,
          "target": "5-master-bedroom-gf"
        },
        {
          "yaw": 1.4845571121329542,
          "pitch": -0.01947044858725988,
          "rotation": 1.5707963267948966,
          "target": "4-kids-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-informal-living",
      "name": "informal living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.12239619981655636,
        "pitch": 0.06092080299997349,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": 0.8277713371424511,
          "pitch": 0.06267766249297146,
          "rotation": 3.141592653589793,
          "target": "0-formal-living"
        },
        {
          "yaw": 1.657198738856799,
          "pitch": 0.2646479852488888,
          "rotation": 3.141592653589793,
          "target": "1-dinning"
        },
        {
          "yaw": 1.8399871220259598,
          "pitch": -0.05029653521375366,
          "rotation": 3.141592653589793,
          "target": "3-kitchen"
        },
        {
          "yaw": 2.0983380093268353,
          "pitch": -0.03012084633138734,
          "rotation": 1.5707963267948966,
          "target": "4-kids-room"
        },
        {
          "yaw": 0.11220488893509284,
          "pitch": -0.030456059622357756,
          "rotation": 0,
          "target": "8-stair-landing"
        },
        {
          "yaw": -0.39739434579933075,
          "pitch": 0.014369457243047279,
          "rotation": 0,
          "target": "7-prayer-room"
        },
        {
          "yaw": -0.7036458112622324,
          "pitch": 0.05060296844652612,
          "rotation": 4.71238898038469,
          "target": "6-guest-room-01"
        },
        {
          "yaw": -2.0332912980286952,
          "pitch": 0.05831447636381171,
          "rotation": 0,
          "target": "5-master-bedroom-gf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.6500460989570804,
        "pitch": 0.026871174202650394,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": -3.0103400473530115,
          "pitch": -0.007632813872401556,
          "rotation": 0,
          "target": "2-informal-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kids-room",
      "name": "kids room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4504053447224106,
          "pitch": -0.05691490845157077,
          "rotation": 0,
          "target": "2-informal-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master-bedroom-gf",
      "name": "master bedroom gf",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.03457066750736715,
        "pitch": 0.0008434912408361583,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": -0.6442338905281737,
          "pitch": 0.018839720532271897,
          "rotation": 0,
          "target": "2-informal-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-guest-room-01",
      "name": "guest room 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.10863784119557351,
        "pitch": -0.009771336073683301,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": 2.122068191484619,
          "pitch": 0.026243869837516698,
          "rotation": 0,
          "target": "2-informal-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-prayer-room",
      "name": "prayer room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.21015352836658074,
        "pitch": -0.034199676257891554,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": 3.116345756465609,
          "pitch": -0.08999435710596693,
          "rotation": 0,
          "target": "2-informal-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-stair-landing",
      "name": "stair landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.211657683616302,
        "pitch": 0.0830563566262974,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": -1.5803856975884152,
          "pitch": 0.659766254359134,
          "rotation": 4.71238898038469,
          "target": "2-informal-living"
        },
        {
          "yaw": -2.7513770713356536,
          "pitch": -0.17854398716076858,
          "rotation": 4.71238898038469,
          "target": "9-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-upper-living",
      "name": "upper living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.09082835903236486,
        "pitch": 0.002442834018424378,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": 0.6085276175134027,
          "pitch": 0.10052444775384295,
          "rotation": 1.5707963267948966,
          "target": "8-stair-landing"
        },
        {
          "yaw": 0.3084892341552212,
          "pitch": 0.04297644051262317,
          "rotation": 0,
          "target": "11-guest-room-02"
        },
        {
          "yaw": -0.2482521482679907,
          "pitch": 0.044588494014966784,
          "rotation": 0,
          "target": "12-masterbedroom"
        },
        {
          "yaw": 1.0510504145322201,
          "pitch": 0.11870923277368917,
          "rotation": 1.5707963267948966,
          "target": "10-front-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-front-balcony",
      "name": "front balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.270972263819635,
          "pitch": 0.06167855581033521,
          "rotation": 4.71238898038469,
          "target": "9-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-guest-room-02",
      "name": "guest room 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.342387793952625,
          "pitch": 0.013872557351128023,
          "rotation": 0,
          "target": "9-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-masterbedroom",
      "name": "masterbedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.664628492474769,
          "pitch": 0.020865016470427378,
          "rotation": 0,
          "target": "9-upper-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": " NIYAS RESIDENCE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
