import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Registerscreen extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="28021f54-811b-45fe-8ab0-c1f4b188fd2e" style={styles.registerscreen}>
        <View data-layer="17c36a97-7900-4ea1-b966-0e7a725f5b16" style={styles.registerscreen_rectangle19}></View>
        <Text data-layer="2b6732b7-bdbc-49f1-9753-e154f756fcb1" style={styles.registerscreen_name}>Name</Text>
        <Text data-layer="91bdf6a3-e2b9-427d-8c6c-f6711cba469d" style={styles.registerscreen_fatherName}>Father Name</Text>
        <Text data-layer="6c53ba34-b9c8-41af-b40c-1aab80fd4ea4" style={styles.registerscreen_age}>Age</Text>
        <Text data-layer="13f69502-196e-4ff7-9900-3df9ceab69db" style={styles.registerscreen_adress}>Adress</Text>
        <Text data-layer="21a3a3f2-9418-4d2f-a3d8-af0986ca4872" style={styles.registerscreen_missingPlace}>Missing Place</Text>
        <Text data-layer="28d890c4-eee8-49ea-8aa0-27bb4430f065" style={styles.registerscreen_phoneNo}>Phone No</Text>
        <Text data-layer="06e83fa7-bd38-4f66-8980-78abfad97eb6" style={styles.registerscreen_male}>Male</Text>
        <Text data-layer="7e58091e-0fbf-4e4f-9f2e-4cefa96c393f" style={styles.registerscreen_female}>Female</Text>
        <Text data-layer="4ece5f6d-106b-4129-a574-1f94c05c8631" style={styles.registerscreen_gender}>Gender</Text>
        <Text data-layer="ca773654-3c1f-4628-a796-0ae06a5dca56" style={styles.registerscreen_skinColor}>Skin Color</Text>
        <Svg data-layer="def8cde1-08e9-4cd6-9792-c86230592096" style={styles.registerscreen_line7} preserveAspectRatio="none" viewBox="-0.00238037109375 -0.5 211.00469970703125 2" fill="transparent"><SvgPath d="M 0 1 L 211 0"  /></Svg>
        <Svg data-layer="9894ec5f-637a-44f8-9c0a-3cdba650cf7d" style={styles.registerscreen_line8} preserveAspectRatio="none" viewBox="-0.00238037109375 -0.5 211.00469970703125 2" fill="transparent"><SvgPath d="M 0 1 L 211 0"  /></Svg>
        <Svg data-layer="81df1ab0-f708-4ece-b7ea-f791a0ca5441" style={styles.registerscreen_line9} preserveAspectRatio="none" viewBox="-0.00238037109375 -0.5 211.00469970703125 2" fill="transparent"><SvgPath d="M 0 1 L 211 0"  /></Svg>
        <Svg data-layer="2e8e18a1-c6c0-4836-afad-7442d2b83010" style={styles.registerscreen_line10} preserveAspectRatio="none" viewBox="-0.00238037109375 -0.5 211.00469970703125 2" fill="transparent"><SvgPath d="M 0 1 L 211 0"  /></Svg>
        <Svg data-layer="961817e3-8467-46cf-978a-479a8a79c301" style={styles.registerscreen_line11} preserveAspectRatio="none" viewBox="-0.00238037109375 -0.5 211.00469970703125 2" fill="transparent"><SvgPath d="M 0 1 L 211 0"  /></Svg>
        <Svg data-layer="6c197a87-552e-46c3-9712-43c9a6bf631f" style={styles.registerscreen_line12} preserveAspectRatio="none" viewBox="-0.00238037109375 -0.5 211.00469970703125 2" fill="transparent"><SvgPath d="M 0 1 L 211 0"  /></Svg>
        <Text data-layer="52a857a2-e0c1-43d1-abab-f37d6f0c770b" style={styles.registerscreen_missingKids}>MISSING KIDS</Text>
        <Text data-layer="6d31be38-28b6-42c0-8247-fd110b14be74" style={styles.registerscreen_post}>Post</Text>
        <Text data-layer="72e0ec00-af32-49d5-b452-32936de0128c" style={styles.registerscreen_search}>Search</Text>
        <Text data-layer="f3daf5a6-3a75-4722-95f4-d91cc37d443d" style={styles.registerscreen_logout}>Logout</Text>
        <Text data-layer="704953c9-6ffc-4ab0-b40a-e20d66bd3dca" style={styles.registerscreen_registerForm}>REGISTER FORM</Text>
        <View data-layer="59ded96f-5c7e-4795-a022-4b37c3f23de4" style={styles.registerscreen_rectangle23}></View>
        <View data-layer="f9c1bae9-82a4-4be6-b23a-fe7157af810e" style={styles.registerscreen_rectangle24}></View>
        <View data-layer="5b878932-11ef-4658-8d49-58adea1dfc55" style={styles.registerscreen_rectangle25}></View>
        <Text data-layer="1ceff9b3-faac-4bcf-8251-e84e6316f390" style={styles.registerscreen_submit}>Submit</Text>
        <View data-layer="7d2a3b2a-36c0-4757-a471-32941735c1ef" style={styles.registerscreen_rectangle26}></View>
        <Text data-layer="4d0656f7-6dc0-47aa-ab12-57334f606411" style={styles.registerscreen_white}>white</Text>
    </ScrollView>
    );
  }
}

Registerscreen.propTypes = {

}

Registerscreen.defaultProps = {

}


const styles = StyleSheet.create({
  "registerscreen": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(0, 17, 234, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 428,
    "height": 926,
    "left": 0,
    "top": 0
  },
  "registerscreen_rectangle19": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(10, 20, 145, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 302,
    "height": 658,
    "left": 63,
    "top": 213
  },
  "registerscreen_name": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 66,
    "height": 32,
    "left": 97,
    "top": 251
  },
  "registerscreen_fatherName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 117,
    "height": 55,
    "left": 97,
    "top": 294
  },
  "registerscreen_age": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 66,
    "height": 32,
    "left": 99,
    "top": 339
  },
  "registerscreen_adress": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 66,
    "height": 32,
    "left": 104,
    "top": 383
  },
  "registerscreen_missingPlace": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 120,
    "height": 33,
    "left": 108,
    "top": 430
  },
  "registerscreen_phoneNo": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 120,
    "height": 33,
    "left": 109,
    "top": 481
  },
  "registerscreen_male": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 51,
    "height": 32,
    "left": 202,
    "top": 562
  },
  "registerscreen_female": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 73,
    "height": 32,
    "left": 203,
    "top": 609
  },
  "registerscreen_gender": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 87,
    "height": 27,
    "left": 109,
    "top": 529
  },
  "registerscreen_skinColor": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 98,
    "height": 27,
    "left": 105,
    "top": 670
  },
  "registerscreen_line7": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 211,
    "height": 2,
    "left": 96.5,
    "top": 280
  },
  "registerscreen_line8": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 211,
    "height": 2,
    "left": 96.5,
    "top": 324
  },
  "registerscreen_line9": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 211,
    "height": 2,
    "left": 97,
    "top": 369
  },
  "registerscreen_line10": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 211,
    "height": 2,
    "left": 108.5,
    "top": 411
  },
  "registerscreen_line11": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 211,
    "height": 2,
    "left": 108.5,
    "top": 461.5
  },
  "registerscreen_line12": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 211,
    "height": 2,
    "left": 108.5,
    "top": 509.5
  },
  "registerscreen_missingKids": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 40,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 278,
    "height": 53,
    "left": 75,
    "top": 37
  },
  "registerscreen_post": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 40,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 78,
    "height": 53,
    "left": 9,
    "top": 117
  },
  "registerscreen_search": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 40,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 133,
    "height": 53,
    "left": 148,
    "top": 117
  },
  "registerscreen_logout": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 40,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 133,
    "height": 53,
    "left": 289,
    "top": 117
  },
  "registerscreen_registerForm": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 145,
    "height": 27,
    "left": 142,
    "top": 90
  },
  "registerscreen_rectangle23": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(51, 107, 238, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 32,
    "height": 28,
    "left": 148,
    "top": 563
  },
  "registerscreen_rectangle24": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(51, 107, 238, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 32,
    "height": 28,
    "left": 148,
    "top": 611
  },
  "registerscreen_rectangle25": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(88, 99, 241, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 30,
    "borderTopRightRadius": 30,
    "borderBottomLeftRadius": 30,
    "borderBottomRightRadius": 30,
    "width": 255,
    "height": 60,
    "left": 87,
    "top": 775
  },
  "registerscreen_submit": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 94,
    "height": 40,
    "left": 170,
    "top": 783
  },
  "registerscreen_rectangle26": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 152,
    "height": 32,
    "left": 137,
    "top": 709
  },
  "registerscreen_white": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 27,
    "left": 190,
    "top": 710
  }
});