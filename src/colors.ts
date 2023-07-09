import oc from "open-color";

const shades = (index: number) => [
  oc.red[index],
  oc.pink[index],
  oc.grape[index],
  oc.violet[index],
  oc.indigo[index],
  oc.blue[index],
  oc.cyan[index],
  oc.teal[index],
  oc.green[index],
  oc.lime[index],
  oc.yellow[index],
  oc.orange[index],
];

const extendsColors = [
  "#2F0000",
  "#600030",
  "#460046",
  "#28004D",
  "#272727",
  "#4D0000",
  "#820041",
  "#5E005E",
  "#3A006F",
  "#3C3C3C",
  "#600000",
  "#9F0050",
  "#750075",
  "#4B0091",
  "#8E8E8E",
  "#EA0000",
  "#FF359A",
  "#FF00FF",
  "#9F35FF",
  "#d0d0d0",
  "#ff7575",
  "#ffaad5",
  "#ffa6ff",
  "#d3a4ff",
  "#000079",
  "#003E3E",
  "#006030",
  "#006000",
  "#0000E3",
  "#0066CC",
  "#00AEAE",
  "#02C874",
  "#00BB00",
  "#2828FF",
  "#0072E3",
  "#00CACA",
  "#02DF82",
  "#00DB00",
  "#4A4AFF",
  "#0080FF",
  "#00E3E3",
  "#02F78E",
  "#00EC00",
  "#AAAAFF",
  "#84C1FF",
  "#A6FFFF",
  "#96FED1",
  "#93FF93",
  "#B9B9FF",
  "#97CBFF",
  "#BBFFFF",
  "#ADFEDC",
  "#A6FFA6",
  "#FBFBFF",
  "#ECF5FF",
  "#FDFFFF",
  "#FBFFFD",
  "#F0FFF0",
  "#467500",
  "#424200",
  "#5B4B00",
  "#844200",
  "#642100",
  "#548C00",
  "#5B5B00",
  "#796400",
  "#9F5000",
  "#842B00",
  "#64A600",
  "#737300",
  "#977C00",
  "#BB5E00",
  "#A23400",
  "#9AFF02",
  "#E1E100",
  "#EAC100",
  "#FF9224",
  "#FF5809",
  "#A8FF24",
  "#F9F900",
  "#FFD306",
  "#FFA042",
  "#FF8040",
  "#D3FF93",
  "#FFFFAA",
  "#FFED97",
  "#FFD1A4",
  "#FFBD9D",
  "#DEFFAC",
  "#FFFFB9",
  "#FFF0AC",
  "#FFDCB9",
  "#FFCBB3",
  "#613030",
  "#616130",
  "#336666",
  "#484891",
  "#6C3365",
  "#AD5A5A",
  "#A5A552",
  "#5CADAD",
  "#8080C0",
  "#AE57A4",
  "#E1C4C4",
  "#D6D6AD",
  "#B3D9D9",
  "#D8D8EB",
  "#DAB1D5",
];

export default {
  canvasBackground: [
    oc.white,
    oc.gray[0],
    oc.gray[1],
    ...shades(0),
    ...extendsColors.slice(0, 57),
  ],
  elementBackground: [
    "transparent",
    oc.gray[4],
    oc.gray[6],
    ...shades(6),
    ...extendsColors.slice(0, 57),
  ],
  elementStroke: [
    oc.black,
    oc.gray[8],
    oc.gray[7],
    ...shades(9),
    ...extendsColors.slice(0, 57),
  ],
};
