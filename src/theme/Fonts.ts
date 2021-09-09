import {metrics} from "./Metrics";

const fontSize = {
    font_6: metrics.screenWidth * (6 / 365),
    font_8: metrics.screenWidth * (8 / 365),
    font_10: metrics.screenWidth * (10 / 365),
    font_12: metrics.screenWidth * (12 / 365),
    font_14: metrics.screenWidth * (14 / 365),
    font_16: metrics.screenWidth * (16 / 365),
    font_20: metrics.screenWidth * (20 / 365),
    font_24: metrics.screenWidth * (24 / 365),
    font_30: metrics.screenWidth * (30 / 365),
    font_36: metrics.screenWidth * (36 / 365),
    font_44: metrics.screenWidth * (44 / 365),
}

const weight = {
    full: '900',
    semi: '600',
    low: '400',
    bold: 'bold',
    normal: 'normal'
}

const type = {

}

export {fontSize, weight, type}
