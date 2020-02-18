import { Platform } from "react-native"

const fonts = Platform.OS == 'ios' ? {
  sf_pro_display_black: 'SFProDisplay-Black',
  sf_pro_display_blackitalic: 'SFProDisplay-BlackItalic',
  sf_pro_display_bold: 'SFProDisplay-Bold',
  sf_pro_display_bolditalic: 'SFProDisplay-BoldItalic',
  sf_pro_display_heavy: 'SFProDisplay-Heavy',
  sf_pro_display_heavyitalic: 'SFProDisplay-HeavyItalic',
  sf_pro_display_light: 'SFProDisplay-Light',
  sf_pro_display_lightitalic: 'SFProDisplay-LightItalic',
  sf_pro_display_medium: 'SFProDisplay-Medium',
  sf_pro_display_mediumitalic: 'SFProDisplay-MediumItalic',
  sf_pro_display_regular: 'SFProDisplay-Regular',
  sf_pro_display_regularitalic: 'SFProDisplay-RegularItalic',
  sf_pro_display_semibold: 'SFProDisplay-Semibold',
  sf_pro_display_semibolditalic: 'SFProDisplay-SemiboldItalic',
  sf_pro_display_thin: 'SFProDisplay-Thin',
  sf_pro_display_thinitalic: 'SFProDisplay-ThinItalic',
  sf_pro_display_ultralight: 'SFProDisplay-Ultralight',
  sf_pro_display_ultralightitalic: 'SFProDisplay-UltralightItalic'
} : {
  sf_pro_display_black: 'SF-Pro-Display-Black',
  sf_pro_display_blackitalic: 'SF-Pro-Display-BlackItalic',
  sf_pro_display_bold: 'SF-Pro-Display-Bold',
  sf_pro_display_bolditalic: 'SF-Pro-Display-BoldItalic',
  sf_pro_display_heavy: 'SF-Pro-Display-Heavy',
  sf_pro_display_heavyitalic: 'SF-Pro-Display-HeavyItalic',
  sf_pro_display_light: 'SF-Pro-Display-Light',
  sf_pro_display_lightitalic: 'SF-Pro-Display-LightItalic',
  sf_pro_display_medium: 'SF-Pro-Display-Medium',
  sf_pro_display_mediumitalic: 'SF-Pro-Display-MediumItalic',
  sf_pro_display_regular: 'SF-Pro-Display-Regular',
  sf_pro_display_regularitalic: 'SF-Pro-Display-RegularItalic',
  sf_pro_display_semibold: 'SF-Pro-Display-Semibold',
  sf_pro_display_semibolditalic: 'SF-Pro-Display-SemiboldItalic',
  sf_pro_display_thin: 'SF-Pro-Display-Thin',
  sf_pro_display_thinitalic: 'SF-Pro-Display-ThinItalic',
  sf_pro_display_ultralight: 'SF-Pro-Display-Ultralight',
  sf_pro_display_ultralightitalic: 'SF-Pro-Display-UltralightItalic'
}

export default fonts
