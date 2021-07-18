import React, { FunctionComponent } from 'react'; 
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

type PoseItemProps = {
    name: string,
    durationInSeconds: number,
    onDurationDecrease: () => void,
    onDurationIncrease: () => void,
};

const PoseItem: FunctionComponent<PoseItemProps>  = ({ name, durationInSeconds, onDurationDecrease, onDurationIncrease }) => {
    console.log(durationInSeconds);
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 32,
            }}>
            {name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}>
            <Button icon={<Icon name="minus" size={25} color="white" onPress={onDurationDecrease} />} />
            <Text 
            style={{
              color: 'white',
              fontSize: 20,
            }}>{durationInSeconds} seconds</Text>
            <Button icon={<Icon name="plus" size={25} color="white" onPress={onDurationIncrease} />} />
          </View>
        </View>);
};

export default PoseItem;