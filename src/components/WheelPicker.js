import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Picker from '@gregfrench/react-native-wheel-picker'
var PickerItem = Picker.Item;

const WheelPicker = ({pages, currentProgress}) => {
  const [selectedItem, setSelectedItem ] = useState(currentProgress);
  // take in a number and output an array between 

  const test = [];
  for (let i = 1; i <= pages; i++) {
    test.push(i.toString())
  }
  console.log(test);

  const [itemList , setItemList ] = useState(test);

  return (
    <View>
      <Text>
        <Picker style={{width: 150, height: 180}}
          // I might need to custumize this - but lets see what Jonas finds
          lineColor="#000000" //to set top and bottom lissdssdsdne color (Without gradients)
          lineGradientColorFrom="#008000" //to set top and bottom starting gradient line color
          lineGradientColorTo="#FF5733" //to set top and bottom ending gradient
          selectedValue={selectedItem}
          itemStyle={{color:"black", fontSize:26}}
          onValueChange={(index) => setSelectedItem(index) }>
          {itemList.map((value, i) => (
            <PickerItem label={value} value={i} key={i}/>
          ))}
        </Picker>
      </Text>
    </View>
  );
};

export default WheelPicker;