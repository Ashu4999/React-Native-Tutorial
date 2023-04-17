import { MaterialIcons } from "@expo/vector-icons";
import { View, TextInput, Text, Modal, TouchableWithoutFeedback, Keyboard, Alert, ScrollView } from "react-native";
import { globalStyles } from '../styles/global';
import { Formik } from "formik";
import FlatButton from "./FlatButton";
import * as yup from 'yup';
import YupInputComp from "./YupInputComp";

let formSchema = yup.object({
    firstName: yup.string().required("Required").min(4),
    lastName: yup.string().required("Required").min(4),
    email: yup.string().required("Required").email(),
    phone: yup.string().required("Required").min(10),
    age: yup.number().required("Required"),
    address: yup.string().required("Required"),
});

export default function FormModal({ openModal, setOpenModal }) {
    let defaultValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        address: '',
    };

    const submitForm = (values, actions) => {
        Alert.alert("Submited Information",
            `First Name: ${values.firstName}\nLast Name: ${values.lastName}\nEmail: ${values.email}\nPhone: ${values.phone}\nAge: ${values.age}\nAddress: ${values.address}\n`,
            [{ text: "Close", onPress: () => { console.log(values); actions.resetForm(); } }]);
    };

    return (
        <Modal visible={openModal} animationType="slide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <View style={globalStyles.form}>
                        <MaterialIcons style={globalStyles.close} name="close" size={40} onPress={() => setOpenModal(false)} />
                        <Formik
                            initialValues={defaultValues}
                            validationSchema={formSchema}
                            onSubmit={submitForm}>
                            {(formProps) => {
                                return (<View style={{ gap: 20 }}>
                                    <YupInputComp
                                        ComponentToRender={<TextInput
                                            style={globalStyles.formInputStyle}
                                            placeholder="First Name"
                                            onChangeText={formProps.handleChange("firstName")}
                                            value={formProps.values.firstName}
                                        />}
                                        fieldName={"firstName"}
                                        formProps={formProps}
                                    />

                                    <YupInputComp
                                        ComponentToRender={<TextInput
                                            style={globalStyles.formInputStyle}
                                            placeholder="Last Name"
                                            onChangeText={formProps.handleChange("lastName")}
                                            value={formProps.values.lastName}
                                        />}
                                        fieldName={"lastName"}
                                        formProps={formProps}
                                    />

                                    <YupInputComp
                                        ComponentToRender={<TextInput
                                            style={globalStyles.formInputStyle}
                                            placeholder="Email ID"
                                            onChangeText={formProps.handleChange("email")}
                                            value={formProps.values.email}
                                        />}
                                        fieldName={"email"}
                                        formProps={formProps}
                                    />

                                    <YupInputComp
                                        ComponentToRender={<TextInput
                                            style={globalStyles.formInputStyle}
                                            placeholder="Phone Number"
                                            onChangeText={formProps.handleChange("phone")}
                                            value={formProps.values.phone}
                                            keyboardType="number-pad"
                                        />}
                                        fieldName={"phone"}
                                        formProps={formProps}
                                    />

                                    <YupInputComp
                                        ComponentToRender={<TextInput
                                            style={globalStyles.formInputStyle}
                                            placeholder="Age"
                                            onChangeText={formProps.handleChange("age")}
                                            value={formProps.values.age}
                                            keyboardType="numeric"
                                        />}
                                        fieldName={"age"}
                                        formProps={formProps}
                                    />

                                    <YupInputComp
                                        ComponentToRender={<TextInput
                                            multiline
                                            maxHeight={120}
                                            style={globalStyles.formInputStyle}
                                            placeholder="Address"
                                            onChangeText={formProps.handleChange("address")}
                                            value={formProps.values.address}
                                        />}
                                        fieldName={"address"}
                                        formProps={formProps}
                                    />

                                    <FlatButton text="Submit" onPress={formProps.handleSubmit} />
                                </View>);
                            }}
                        </Formik>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </Modal>
    );
}