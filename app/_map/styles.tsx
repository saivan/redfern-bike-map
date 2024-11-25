
const styles = {
  "version": 8,
  "sources": {
    "openmaptiles": {
      "url": "https://api.maptiler.com/tiles/v3/tiles.json?key=iO79eRlGvpN4eXFwjaSf",
      "type": "vector"
    },
    "maptiler_attribution": {
      "attribution": "<a href=\"https://www.maptiler.com/copyright/\" target=\"_blank\">&copy; MapTiler</a> <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\">&copy; OpenStreetMap contributors</a>",
      "type": "vector"
    }
  },
  "layers": [{
    "id": "background",
    "type": "background",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "background-color": {
        "stops": [
          [6, "rgba(244, 244, 244, 1)"],
          [10, "#E9EEF1"]
        ]
      }
    }
  }, {
    "id": "landcover_grassland",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "globallandcover",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "rgba(207, 211, 219, 1)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [4, 1],
          [8, 0]
        ]
      }
    },
    "filter": ["all", ["==", "class", "grass"]]
  }, {
    "id": "landcover_scrubland",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "globallandcover",
    "paint": {
      "fill-color": "rgba(240, 240, 242, 1)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [4, 1],
          [8, 0]
        ]
      }
    },
    "filter": ["all", ["==", "class", "scrub"]]
  }, {
    "id": "landcover_treeland",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "globallandcover",
    "paint": {
      "fill-color": "rgba(202, 205, 222, 1)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [4, 1],
          [8, 0]
        ]
      }
    },
    "filter": ["all", ["==", "class", "tree"]]
  }, {
    "id": "landcover_forestland",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "globallandcover",
    "paint": {
      "fill-color": "rgba(149, 151, 172, 1)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [4, 1],
          [8, 0]
        ]
      }
    },
    "filter": ["all", ["==", "class", "forest"]]
  }, {
    "id": "landcover_snowland",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "globallandcover",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "hsl(0, 0%, 100%)",
      "fill-opacity": {
        "base": 1,
        "stops": [
          [4, 1],
          [8, 0]
        ]
      }
    },
    "filter": ["all", ["==", "class", "snow"]]
  }, {
    "id": "landcover_wood",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "landcover",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "rgba(164, 160, 193, 0.7)",
      "fill-opacity": 0.4,
      "fill-antialias": false
    },
    "metadata": {},
    "filter": ["all", ["==", "class", "wood"]]
  }, {
    "id": "landcover_grass",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "landcover",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "rgba(224, 232, 201, 1)",
      "fill-opacity": 0.3,
      "fill-antialias": false
    },
    "metadata": {},
    "filter": ["all", ["==", "class", "grass"]]
  }, {
    "id": "landcover_sand",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "landcover",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "#f2e9ac",
      "fill-opacity": 1,
      "fill-antialias": false
    },
    "metadata": {},
    "filter": ["all", ["in", "class", "sand"]]
  }, {
    "id": "landcover_sand_outline",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "landcover",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#f2e9ac",
      "line-width": 2
    },
    "metadata": {},
    "filter": ["all", ["in", "class", "sand"]]
  }, {
    "id": "water",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "water",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "#151719"
    },
    "metadata": {},
    "filter": ["all", ["!=", "intermittent", 1],
      ["!=", "brunnel", "tunnel"]
    ]
  }, {
    "id": "road_area_bridge",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "rgba(246, 241, 229, 0.6)",
      "fill-antialias": true
    },
    "metadata": {},
    "filter": ["all", ["==", "$type", "Polygon"],
      ["==", "brunnel", "bridge"]
    ]
  }, {
    "id": "road_area_pattern",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-pattern": "pedestrian_polygon"
    },
    "metadata": {},
    "filter": ["all", ["==", "$type", "Polygon"],
      ["!has", "brunnel"],
      ["!in", "class", "bridge", "pier"]
    ]
  }, {
    "id": "road_service_track_casing",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#cfcdca",
      "line-width": {
        "base": 1.2,
        "stops": [
          [13, 1.5],
          [20, 11]
        ]
      }
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "class", "service", "track"]
    ]
  }, {
    "id": "road_link_casing",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "minzoom": 13,
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#e9ac77",
      "line-width": {
        "base": 1.2,
        "stops": [
          [12, 1],
          [13, 3],
          [14, 4],
          [20, 15]
        ]
      },
      "line-opacity": 1
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["!in", "class", "motorway", "trunk", "primary", "pedestrian", "path", "track", "service"],
      ["==", "ramp", 1]
    ]
  }, {
    "id": "road_trunk_primary_link_casing",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "butt",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#e9ac77",
      "line-width": {
        "base": 1.2,
        "stops": [
          [5, 0],
          [7, 0.7],
          [20, 14]
        ]
      }
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["==", "ramp", 1],
      ["in", "class", "primary", "trunk"]
    ]
  }, {
    "id": "road_motorway_link_casing",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "minzoom": 12,
    "layout": {
      "line-cap": "butt",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "rgba(215, 119, 233, 1)",
      "line-width": {
        "base": 1.2,
        "stops": [
          [12, 1],
          [13, 3],
          [14, 4],
          [20, 15]
        ]
      },
      "line-opacity": 1
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["==", "class", "motorway"],
      ["==", "ramp", 1]
    ]
  }, {
    "id": "road_minor_casing",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#cfcdca",
      "line-width": {
        "base": 1.2,
        "stops": [
          [12, 0.7],
          [13, 1],
          [14, 4],
          [20, 16]
        ]
      },
      "line-opacity": 1
    },
    "metadata": {},
    "filter": ["all", ["==", "$type", "LineString"],
      ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "class", "minor"],
      ["!=", "ramp", "1"]
    ]
  }, {
    "id": "road_secondary_tertiary_casing",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "rgba(195, 189, 187, 1)",
      "line-width": {
        "base": 1.2,
        "stops": [
          [8, 1.5],
          [20, 17]
        ]
      },
      "line-opacity": 1
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "class", "secondary", "tertiary"],
      ["!=", "ramp", 1]
    ]
  }, {
    "id": "road_trunk_primary_casing",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "butt",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#e9ac77",
      "line-width": {
        "base": 1.2,
        "stops": [
          [5, 0.4],
          [6, 0.7],
          [7, 1.75],
          [20, 22]
        ]
      },
      "line-opacity": 1
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["!=", "ramp", 1],
      ["in", "class", "primary", "trunk"],
      ["!=", "ramp", 1]
    ]
  }, {
    "id": "road_motorway_casing",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "minzoom": 5,
    "layout": {
      "line-cap": "butt",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#e9ac77",
      "line-width": {
        "base": 1.2,
        "stops": [
          [5, 0.4],
          [6, 0.7],
          [7, 1.75],
          [20, 22]
        ]
      }
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["==", "class", "motorway"],
      ["!=", "ramp", 1]
    ]
  }, {
    "id": "road_path_pedestrian",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "minzoom": 12,
    "layout": {
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "rgba(176, 169, 150, 0.45)",
      "line-width": {
        "base": 1.2,
        "stops": [
          [16, 2],
          [20, 7.5]
        ]
      },
      "line-dasharray": [1, 1]
    },
    "metadata": {},
    "filter": ["all", ["==", "$type", "LineString"],
      ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "class", "path", "pedestrian"]
    ]
  }, {
    "id": "road_link",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "minzoom": 13,
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#fea",
      "line-width": {
        "base": 1.2,
        "stops": [
          [12.5, 0],
          [13, 1.5],
          [14, 2.5],
          [20, 11.5]
        ]
      }
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["==", "ramp", 1],
      ["!in", "class", "motorway", "trunk", "primary", "pedestrian", "path", "track", "service"]
    ]
  }, {
    "id": "road_trunk_primary_link",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "rgba(131, 95, 201, 1)",
      "line-width": {
        "base": 1.2,
        "stops": [
          [5, 0],
          [7, 0.5],
          [20, 10]
        ]
      }
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["==", "ramp", 1],
      ["in", "class", "primary", "trunk"]
    ]
  }, {
    "id": "road_motorway_link",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "minzoom": 12,
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "rgba(106, 91, 170, 1)",
      "line-width": {
        "base": 1.2,
        "stops": [
          [12.5, 0],
          [13, 1.5],
          [14, 2.5],
          [20, 11.5]
        ]
      }
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["==", "class", "motorway"],
      ["==", "ramp", 1]
    ]
  }, {
    "id": "road_service_track",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#fff",
      "line-width": {
        "base": 1.2,
        "stops": [
          [13, 1],
          [16, 2],
          [20, 7.5]
        ]
      }
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "class", "service", "track"]
    ]
  }, {
    "id": "road_service_track_construction",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#fff",
      "line-width": {
        "base": 1.2,
        "stops": [
          [13, 1],
          [16, 2],
          [20, 7.5]
        ]
      },
      "line-dasharray": [2, 2]
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "class", "service_construction", "track_construction"]
    ]
  }, {
    "id": "road_minor",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#fff",
      "line-width": {
        "base": 1.2,
        "stops": [
          [12.9, 0],
          [13, 1],
          [14, 2.5],
          [20, 13]
        ]
      },
      "line-opacity": 1
    },
    "metadata": {},
    "filter": ["all", ["==", "$type", "LineString"],
      ["all", ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "minor"]
      ]
    ]
  }, {
    "id": "road_minor_construction",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#fff",
      "line-width": {
        "base": 1.2,
        "stops": [
          [14, 2.5],
          [20, 18]
        ]
      },
      "line-opacity": 1,
      "line-dasharray": [2, 2]
    },
    "metadata": {},
    "filter": ["all", ["==", "$type", "LineString"],
      ["all", ["!in", "brunnel", "bridge", "tunnel"],
        ["in", "class", "minor_construction"]
      ]
    ]
  }, {
    "id": "road_secondary_tertiary",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "rgba(245, 245, 243, 1)",
      "line-width": {
        "base": 1.2,
        "stops": [
          [6.5, 0],
          [8, 0.5],
          [20, 13]
        ]
      }
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "class", "secondary", "tertiary"]
    ]
  }, {
    "id": "road_secondary_tertiary_construction",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#fff",
      "line-width": {
        "base": 1.2,
        "stops": [
          [6.5, 0],
          [8, 0.5],
          [20, 13]
        ]
      },
      "line-dasharray": [2, 2]
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "class", "secondary_construction", "tertiary_construction"]
    ]
  }, {
    "id": "road_trunk_primary",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "rgba(182, 170, 255, 1)",
      "line-width": {
        "base": 1.2,
        "stops": [
          [5, 0],
          [7, 1],
          [20, 18]
        ]
      }
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["!=", "ramp", 1],
      ["in", "class", "primary", "trunk"]
    ]
  }, {
    "id": "road_trunk_primary_construction",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#fea",
      "line-width": {
        "base": 1.2,
        "stops": [
          [5, 0],
          [7, 1],
          [20, 18]
        ]
      },
      "line-dasharray": [2, 2]
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["!=", "ramp", 1],
      ["in", "class", "primary_construction", "trunk_construction"]
    ]
  }, {
    "id": "road_motorway",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "minzoom": 5,
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": {
        "base": 1,
        "stops": [
          [5, "rgba(74, 186, 242, 1)"],
          [6, "rgba(168, 136, 255, 1)"]
        ]
      },
      "line-width": {
        "base": 1.2,
        "stops": [
          [5, 0],
          [7, 1],
          [20, 18]
        ]
      }
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["==", "class", "motorway"],
      ["!=", "ramp", 1]
    ]
  }, {
    "id": "road_major_rail",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "paint": {
      "line-color": "#bbb",
      "line-width": {
        "base": 1.4,
        "stops": [
          [14, 0.4],
          [15, 0.75],
          [20, 2]
        ]
      }
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "class", "rail"]
    ]
  }, {
    "id": "road_major_rail_hatching",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "paint": {
      "line-color": "#bbb",
      "line-width": {
        "base": 1.4,
        "stops": [
          [14.5, 0],
          [15, 3],
          [20, 8]
        ]
      },
      "line-dasharray": [0.2, 8]
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["==", "class", "rail"]
    ]
  }, {
    "id": "road_minor_rail",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "paint": {
      "line-color": "#bbb",
      "line-width": {
        "base": 1.4,
        "stops": [
          [14, 0.4],
          [15, 0.75],
          [20, 2]
        ]
      }
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "subclass", "tram", "light_rail"]
    ]
  }, {
    "id": "road_minor_rail_hatching",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "transportation",
    "paint": {
      "line-color": "#bbb",
      "line-width": {
        "base": 1.4,
        "stops": [
          [14.5, 0],
          [15, 2],
          [20, 6]
        ]
      },
      "line-dasharray": [0.2, 4]
    },
    "metadata": {},
    "filter": ["all", ["!in", "brunnel", "bridge", "tunnel"],
      ["in", "subclass", "tram", "light_rail"]
    ]
  }, {
    "id": "boundary_3",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "boundary",
    "minzoom": 3,
    "layout": {
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "#9e9cab",
      "line-width": {
        "base": 1,
        "stops": [
          [4, 0.4],
          [5, 0.7],
          [12, 1.6]
        ]
      },
      "line-dasharray": [5, 3]
    },
    "metadata": {},
    "filter": ["all", ["in", "admin_level", 3, 4],
      ["==", "maritime", 0]
    ]
  }, {
    "id": "boundary_2_z0-4",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "boundary",
    "minzoom": 0,
    "maxzoom": 5,
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "rgba(139, 139, 139, 1)",
      "line-width": {
        "base": 1,
        "stops": [
          [3, 1],
          [5, 1.2]
        ]
      },
      "line-opacity": 1
    },
    "metadata": {},
    "filter": ["all", ["==", "admin_level", 2],
      ["==", "maritime", 0],
      ["!has", "claimed_by"]
    ]
  }, {
    "id": "boundary_2_z5",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "boundary",
    "minzoom": 5,
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "rgba(139, 139, 139, 1)",
      "line-width": {
        "base": 1,
        "stops": [
          [5, 1.2],
          [12, 3]
        ]
      },
      "line-opacity": 1
    },
    "metadata": {},
    "filter": ["all", ["==", "admin_level", 2],
      ["==", "disputed", 0],
      ["==", "maritime", 0]
    ]
  }, {
    "id": "boundary_2_z5_disputed",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "boundary",
    "minzoom": 5,
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "rgba(120, 120, 120, 1)",
      "line-width": {
        "base": 1,
        "stops": [
          [5, 1.2],
          [12, 3]
        ]
      },
      "line-opacity": 1,
      "line-dasharray": [4, 3]
    },
    "metadata": {},
    "filter": ["all", ["==", "admin_level", 2],
      ["==", "disputed", 1],
      ["==", "maritime", 0]
    ]
  }, {
    "id": "boundary_2_z5_disputed_maritime",
    "type": "line",
    "source": "openmaptiles",
    "source-layer": "boundary",
    "minzoom": 5,
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-color": "rgba(98,185,229,1)",
      "line-width": {
        "base": 1,
        "stops": [
          [5, 1.2],
          [12, 3]
        ]
      },
      "line-opacity": 1,
      "line-dasharray": [4, 3]
    },
    "metadata": {},
    "filter": ["all", ["==", "admin_level", 2],
      ["==", "disputed", 1],
      ["==", "maritime", 1]
    ]
  }, {
    "id": "building",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "building",
    "minzoom": 13,
    "maxzoom": 14,
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "rgba(189, 185, 181, 0.3)",
      "fill-outline-color": {
        "base": 1,
        "stops": [
          [13, "hsla(35, 6%, 79%, 0.32)"],
          [14, "hsl(35, 6%, 79%)"]
        ]
      }
    },
    "metadata": {}
  }, {
    "id": "building-3d",
    "type": "fill-extrusion",
    "source": "openmaptiles",
    "source-layer": "building",
    "minzoom": 14,
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-extrusion-base": {
        "type": "identity",
        "property": "render_min_height"
      },
      "fill-extrusion-color": "rgba(189, 185, 181, 1)",
      "fill-extrusion-height": {
        "type": "identity",
        "property": "render_height"
      },
      "fill-extrusion-opacity": 0.3
    },
    "metadata": {},
    "filter": ["all", ["!has", "hide_3d"]]
  }, {
    "id": "water_name_line",
    "type": "symbol",
    "source": "openmaptiles",
    "source-layer": "water_name",
    "minzoom": 0,
    "layout": {
      "text-font": ["Roboto Regular", "Noto Sans Regular"],
      "text-size": 12,
      "text-field": "{name:latin}\n{name:nonlatin}",
      "visibility": "visible",
      "text-max-width": 5,
      "symbol-placement": "line"
    },
    "paint": {
      "text-color": "rgba(76, 76, 189, 1)",
      "text-halo-color": "rgba(255,255,255,0.7)",
      "text-halo-width": 1
    },
    "metadata": {},
    "filter": ["all", ["==", "$type", "LineString"]]
  }, {
    "id": "water_name_point",
    "type": "symbol",
    "source": "openmaptiles",
    "source-layer": "water_name",
    "minzoom": 2,
    "maxzoom": 24,
    "layout": {
      "text-font": ["Roboto Regular", "Noto Sans Regular"],
      "text-size": 12,
      "text-field": "{name:latin}\n{name:nonlatin}",
      "visibility": "visible",
      "text-max-width": 5
    },
    "paint": {
      "text-color": "rgba(144, 166, 187, 1)",
      "text-halo-color": "rgba(252, 185, 22, 0)",
      "text-halo-width": 1
    },
    "metadata": {},
    "filter": ["all", ["==", "$type", "Point"],
      ["!=", "class", "ocean"]
    ]
  }, {
    "id": "water_ocean_name_point",
    "type": "symbol",
    "source": "openmaptiles",
    "source-layer": "water_name",
    "minzoom": 0,
    "layout": {
      "text-font": ["Roboto Regular", "Noto Sans Regular"],
      "text-size": 12,
      "text-field": "{name:latin}\n{name:nonlatin}",
      "visibility": "visible",
      "text-max-width": 5
    },
    "paint": {
      "text-color": "rgba(76, 125, 173, 1)",
      "text-halo-color": "rgba(255,255,255,0)",
      "text-halo-width": 1
    },
    "metadata": {},
    "filter": ["all", ["==", "$type", "Point"],
      ["==", "class", "ocean"]
    ]
  }, {
    "id": "place_park",
    "type": "symbol",
    "source": "openmaptiles",
    "source-layer": "park",
    "minzoom": 12,
    "layout": {
      "text-font": ["Roboto Condensed Italic", "Noto Sans Italic"],
      "text-size": {
        "base": 1.2,
        "stops": [
          [12, 10],
          [15, 14]
        ]
      },
      "text-field": "{name:latin}\n{name:nonlatin}",
      "visibility": "visible",
      "symbol-spacing": 1250,
      "text-max-width": 9,
      "text-transform": "none",
      "symbol-avoid-edges": false,
      "text-letter-spacing": 0.1
    },
    "paint": {
      "text-color": "rgba(94, 141, 58, 1)",
      "text-halo-blur": 0.5,
      "text-halo-color": "rgba(255,255,255,0.8)",
      "text-halo-width": 1.2
    },
    "metadata": {},
    "filter": ["all", ["==", "rank", 1]]
  }, {
    "id": "place_other",
    "type": "symbol",
    "source": "openmaptiles",
    "source-layer": "place",
    "minzoom": 8,
    "layout": {
      "text-font": ["Roboto Condensed Italic", "Noto Sans Italic"],
      "text-size": {
        "base": 1.2,
        "stops": [
          [12, 15],
          [15, 14]
        ]
      },
      "text-field": "{name:latin}\n{name:nonlatin}",
      "visibility": "visible",
      "text-max-width": 9,
      "text-transform": "uppercase",
      "text-letter-spacing": 0.1
    },
    "paint": {
      "text-color": "rgba(66, 62, 62, 1)",
      "text-halo-color": "rgba(255,255,255,0.8)",
      "text-halo-width": 1.2
    },
    "metadata": {},
    "filter": ["all", ["in", "class", "hamlet", "island", "islet", "neighbourhood", "suburb"]]
  }, {
    "id": "place_village",
    "type": "symbol",
    "source": "openmaptiles",
    "source-layer": "place",
    "minzoom": 8,
    "layout": {
      "text-font": ["Roboto Regular", "Noto Sans Regular"],
      "text-size": {
        "base": 1.2,
        "stops": [
          [10, 12],
          [15, 22]
        ]
      },
      "text-field": "{name:latin}\n{name:nonlatin}",
      "visibility": "visible",
      "text-max-width": 8
    },
    "paint": {
      "text-color": "#333",
      "text-halo-color": "rgba(255,255,255,0.8)",
      "text-halo-width": 1.2
    },
    "metadata": {},
    "filter": ["all", ["==", "class", "village"]]
  }, {
    "id": "place_town",
    "type": "symbol",
    "source": "openmaptiles",
    "source-layer": "place",
    "minzoom": 6,
    "layout": {
      "text-font": ["Roboto Regular", "Noto Sans Regular"],
      "text-size": {
        "base": 1.2,
        "stops": [
          [7, 12],
          [11, 16]
        ]
      },
      "icon-image": {
        "base": 1,
        "stops": [
          [0, "circle-stroked_16"],
          [10, ""]
        ]
      },
      "text-field": "{name:latin}\n{name:nonlatin}",
      "visibility": "visible",
      "text-anchor": "bottom",
      "text-offset": [0, 0],
      "text-max-width": 8
    },
    "paint": {
      "text-color": "#333",
      "text-halo-color": "rgba(255,255,255,0.8)",
      "text-halo-width": 1.2
    },
    "metadata": {},
    "filter": ["all", ["==", "class", "town"]]
  }, {
    "id": "place_city",
    "type": "symbol",
    "source": "openmaptiles",
    "source-layer": "place",
    "minzoom": 5,
    "layout": {
      "text-font": ["Roboto Medium", "Noto Sans Regular"],
      "text-size": {
        "base": 1.2,
        "stops": [
          [7, 14],
          [11, 24]
        ]
      },
      "icon-image": {
        "base": 1,
        "stops": [
          [0, "circle-stroked_16"],
          [10, ""]
        ]
      },
      "text-field": "{name:latin}\n{name:nonlatin}",
      "visibility": "visible",
      "text-anchor": "bottom",
      "text-offset": [0, 0],
      "icon-optional": false,
      "text-max-width": 8,
      "icon-allow-overlap": true
    },
    "paint": {
      "text-color": "#333",
      "text-halo-color": "rgba(255,255,255,0.8)",
      "text-halo-width": 1.2
    },
    "metadata": {},
    "filter": ["all", ["==", "class", "city"]]
  }, {
    "id": "place_region",
    "type": "symbol",
    "source": "openmaptiles",
    "source-layer": "place",
    "minzoom": 5,
    "maxzoom": 7,
    "layout": {
      "text-font": ["Roboto Medium", "Noto Sans Regular"],
      "text-size": {
        "stops": [
          [3, 9],
          [5, 10],
          [6, 11]
        ]
      },
      "text-field": "{name:latin}\n{name:nonlatin}",
      "visibility": "visible",
      "text-padding": 2,
      "text-transform": "uppercase",
      "text-letter-spacing": 0.1
    },
    "paint": {
      "text-color": "rgba(118, 116, 108, 1)",
      "text-halo-color": "rgba(255,255,255,0.7)",
      "text-halo-width": 0.8
    },
    "metadata": {},
    "filter": ["all", ["==", "class", "state"],
      ["in", "rank", 3, 4, 5]
    ]
  }, {
    "id": "place_state",
    "type": "symbol",
    "source": "openmaptiles",
    "source-layer": "place",
    "minzoom": 3,
    "maxzoom": 6,
    "layout": {
      "text-font": ["Roboto Medium", "Noto Sans Regular"],
      "text-size": {
        "stops": [
          [3, 9],
          [5, 11],
          [6, 12]
        ]
      },
      "text-field": "{name:latin}\n{name:nonlatin}",
      "visibility": "visible",
      "text-padding": 2,
      "text-transform": "uppercase",
      "text-letter-spacing": 0.1
    },
    "paint": {
      "text-color": "rgba(118, 116, 108, 1)",
      "text-halo-color": "rgba(255,255,255,0.7)",
      "text-halo-width": 0.8
    },
    "metadata": {},
    "filter": ["all", ["==", "class", "state"],
      ["in", "rank", 1, 2]
    ]
  }, {
    "id": "continent",
    "type": "symbol",
    "source": "openmaptiles",
    "source-layer": "place",
    "maxzoom": 1,
    "layout": {
      "text-font": ["Roboto Condensed Italic", "Noto Sans Italic"],
      "text-size": 13,
      "text-field": "{name:latin}",
      "text-justify": "center",
      "text-transform": "uppercase"
    },
    "paint": {
      "text-color": "#633",
      "text-halo-color": "rgba(255,255,255,0.7)",
      "text-halo-width": 1
    },
    "metadata": {},
    "filter": ["all", ["==", "class", "continent"]]
  }, {
    "id": "housenumber",
    "type": "symbol",
    "source": "openmaptiles",
    "source-layer": "housenumber",
    "minzoom": 17.5,
    "layout": {
      "text-font": ["Roboto Medium", "Noto Sans Regular"],
      "text-size": 10,
      "text-field": "{housenumber}",
      "visibility": "visible"
    },
    "paint": {
      "text-color": "rgba(119, 102, 85, 0.69)"
    }
  }],
  "metadata": {
    "maptiler:copyright": "This style was generated on MapTiler Cloud. Usage outside of MapTiler Cloud requires valid MapTiler Data Package: https://www.maptiler.com/data/package/ -- please contact us."
  },
  "glyphs": "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=iO79eRlGvpN4eXFwjaSf",
  "sprite": "https://api.maptiler.com/maps/7ecc68b4-f837-4187-917d-0bd00c52dccf/sprite",
  "bearing": 0,
  "pitch": 0,
  "center": [147.04699683281774, -35.219516867416026],
  "zoom": 6.930617222533038
}
export default styles