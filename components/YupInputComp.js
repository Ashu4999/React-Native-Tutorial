import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function YupInputComp({ ComponentToRender, fieldName, formProps }) {
    return (
        <View>
            {ComponentToRender}
            {(formProps.errors[fieldName] && formProps.touched[fieldName]) && <Text style={[globalStyles.error, { marginLeft: 5 }]}>{formProps.errors[fieldName]}</Text>}
        </View>
    );
}