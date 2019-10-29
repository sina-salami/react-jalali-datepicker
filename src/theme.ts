import * as styledComponents from "styled-components";
import { IDatePickerTheme, IRangeDatePickerTheme, styledThemes } from "./types";

export const defaultRangeTheme: IRangeDatePickerTheme = {
  backColor: "#FFFFFF",
  // head
  headBackColor: "#FFFFFF",
  headTitleColor: "#aeaeae",
  headArrowColor: "#000",
  headRangeBackColor: "#D6D6D6",
  headRangeColor: "#000",

  // weekdays color
  weekDaysColor: "#3F3F3F",

  // days
  daysColor: "#000",
  daysBackColor: "#FFFFFF",
  holidaysColor: "#F50057",
  holidaysBackColor: "#FFFFFF",
  daysRound: "50%",

  // start end
  startRangeBackColor: "#D6D6D6",
  startRangeColor: "#000",
  endRangeBackColor: "#D6D6D6",
  endRangeColor: "#000",
  continueRangeBackColor: "#f3f3f3",
  continueRangeColor: "#000",
  sameRangeBackColor: "#fff",
  sameRangeColor: "#2979ff",

  // buttons
  submitBackColor: "#D6D6D6",
  submitHoverBackColor: "#f3f3f3",
  submitColor: "#000",
  submitHoverColor: "#000",
  cancelBackColor: "#fff",
  cancelHoverBackColor: "#D6D6D6",
  cancelColor: "#000",
  cancelHoverColor: "#000",
};

export const IDatePickerTheme = {
    backColor: "#624E9C",
    // head
    headBackColor: "#624E9C",
    headTitleColor: "#ffff",
    headArrowColor: "#fff",
    headTimeTitleColor: "#fff",
    headRangeBackColor: "#fff",
    headRangeColor: "#000",
  
    // weekdays color
    weekDaysColor: "#fff",
  
    // days
    daysColor: "#000",
    daysBackColor: "#FFFFFF",
    holidaysColor: "#FF4949",
    holidaysBackColor: "#FFFFFF",
    daysRound: "50%",
  
    selectDayColor: "#fff",
    selectDayBackColor: "#617fdf",
  
    // buttons
    submitBackColor: "#fff",
    submitHoverBackColor: "#D6D6D6",
    submitColor: "#000",
    submitHoverColor: "#000",
    cancelBackColor: "#fff",
    cancelHoverBackColor: "#D6D6D6",
    cancelColor: "#000",
    cancelHoverColor: "#000",
    changeViewButtonBackColor: "#fff",
    changeViewButtonHoverBackColor: "#D6D6D6",
    changeViewButtonColor: "#000",
    changeViewButtonHoverColor: "#000",
    // time
    timeBackColor: "#f0f0f0",
    timeNumberColor: "#000",
    handBackColor: "#617fdf",
    handCircleColor: "#617fdf",
    selectedNumberColor: "#fff",
  };

const {
  default: styled,
  ThemeProvider,
  keyframes,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  styledThemes
>;

export { ThemeProvider, keyframes };
export default styled;
