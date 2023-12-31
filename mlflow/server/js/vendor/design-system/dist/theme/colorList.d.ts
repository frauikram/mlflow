export type ColorName = 'blue' | 'green' | 'grey' | 'red' | 'yellow';
export type ColorWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
export type PrimaryColorToken = `${ColorName}${ColorWeight}` | 'primary' | 'white';
export type SecondaryColorToken = 'brown' | 'coral' | 'charcoal' | 'indigo' | 'lemon' | 'lime' | 'pink' | 'purple' | 'teal' | 'turquoise';
export type TagColorToken = `tag${Capitalize<SecondaryColorToken>}` | 'tagDefault';
type ColorPalettePrimary = Record<PrimaryColorToken, string>;
type ColorPaletteSecondary = Record<SecondaryColorToken, string>;
export declare const colorPalettePrimary: ColorPalettePrimary;
export declare const newGreys: {
    grey100: string;
    grey200: string;
    grey300: string;
    grey400: string;
    grey500: string;
    grey600: string;
    grey700: string;
    grey800: string;
};
export declare const colorPaletteSecondary: ColorPaletteSecondary;
export declare const lightColorList: {
    backgroundPrimary: string;
    actionDangerPrimaryBackgroundDefault: string;
    actionDangerPrimaryBackgroundHover: string;
    actionDangerPrimaryBackgroundPress: string;
    actionDangerDefaultBackgroundDefault: string;
    actionDangerDefaultBackgroundHover: string;
    actionDangerDefaultBackgroundPress: string;
    actionDangerDefaultBorderDefault: string;
    actionDangerDefaultBorderHover: string;
    actionDangerDefaultBorderPress: string;
    actionDangerDefaultTextDefault: string;
    actionDangerDefaultTextHover: string;
    actionDangerDefaultTextPress: string;
    actionDefaultBackgroundDefault: string;
    actionDefaultBackgroundHover: string;
    actionDefaultBackgroundPress: string;
    actionDefaultBorderDefault: string;
    actionDefaultBorderFocus: string;
    actionDefaultBorderHover: string;
    actionDefaultBorderPress: string;
    actionDefaultTextDefault: string;
    actionDefaultTextHover: string;
    actionDefaultTextPress: string;
    actionDisabledBackground: string;
    actionDisabledText: string;
    actionPrimaryBackgroundDefault: string;
    actionPrimaryBackgroundHover: string;
    actionPrimaryBackgroundPress: string;
    actionPrimaryTextDefault: string;
    actionPrimaryTextHover: string;
    actionPrimaryTextPress: string;
    actionTertiaryBackgroundDefault: string;
    actionTertiaryBackgroundHover: string;
    actionTertiaryBackgroundPress: string;
    actionTertiaryTextDefault: string;
    actionTertiaryTextHover: string;
    actionTertiaryTextPress: string;
    backgroundDanger: string;
    backgroundSecondary: string;
    backgroundWarning: string;
    backgroundValidationDanger: string;
    backgroundValidationSuccess: string;
    backgroundValidationWarning: string;
    border: string;
    borderDecorative: string;
    borderValidationDanger: string;
    borderValidationWarning: string;
    textPrimary: string;
    textSecondary: string;
    textPlaceholder: string;
    textValidationDanger: string;
    textValidationSuccess: string;
    textValidationWarning: string;
    textValidationInfo: string;
    overlayOverlay: string;
    tagDefault: string;
    tagBrown: string;
    tagCoral: string;
    tagCharcoal: string;
    tagIndigo: string;
    tagLemon: string;
    tagLime: string;
    tagPink: string;
    tagPurple: string;
    tagTeal: string;
    tagTurquoise: string;
    tagText: string;
    tagHover: string;
    tagPress: string;
    tagIconHover: string;
    tagIconPress: string;
    typographyCodeBg: string;
    tableRowHover: string;
    tooltipBackgroundTooltip: string;
};
export declare const darkColorList: typeof lightColorList;
export declare const secondaryColorsUsingNewGreys: {
    charcoal: string;
};
export declare const lightColorsUsingNewGreys: {
    actionDefaultBorderDefault: string;
    actionDefaultTextDefault: string;
    actionDisabledBackground: string;
    actionDisabledText: string;
    backgroundSecondary: string;
    border: string;
    borderDecorative: string;
    textPrimary: string;
    textSecondary: string;
    textPlaceholder: string;
    textValidationInfo: string;
    overlayOverlay: string;
    tagDefault: string;
    tagCharcoal: string;
    typographyCodeBg: string;
    tableRowHover: string;
    tooltipBackgroundTooltip: string;
};
export declare const darkColorsUsingNewGreys: {
    actionPrimaryTextDefault: string;
    actionPrimaryTextHover: string;
    actionPrimaryTextPress: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    textPlaceholder: string;
    overlayOverlay: string;
    tagCharcoal: string;
};
export {};
//# sourceMappingURL=colorList.d.ts.map