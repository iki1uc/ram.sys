// aus STATION9.js MASSIERT v81
soll_logic: { rule:"subgrid must be valid for requested X", fallback:"truncate to X", priority:"soll-overrides-ist" },
submasks: { "3x3":{cols:3,inherit:"protocol_3x4"}, "3x2":{cols:2,inherit:"protocol_3x4"}, "3x1":{cols:1,inherit:"protocol_3x4"} },
subgrids: [{ name:"3x4", cols:4 },{ name:"3x5", cols:5 },{ name:"3x6", cols:6 },{ name:"3x7", note:"käfer" }],
