import { MaterialIcons } from "@expo/vector-icons";
import { View, TextInput, Button, Modal, Text } from "react-native";
import { globalStyles } from '../styles/global';
import { Formik } from "formik";

export default function FormModal({ openModal, setOpenModal }) {
    let defaultValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        address: '',
    };

    const submitForm = (values) => {
        console.log(values);
    };

    return (
        <Modal visible={openModal} animationType="slide">
            <View style={globalStyles.form}>
                <MaterialIcons style={globalStyles.close} name="close" size={40} onPress={() => setOpenModal(false)} />
                <Formik
                    initialValues={defaultValues}
                    onSubmit={submitForm}>
                    {(formProps) => {
                        return (<View style={{ gap: 20 }}>
                            <TextInput
                                style={globalStyles.formInputStyle}
                                placeholder="First Name"
                                onChangeText={formProps.handleChange("firstName")}
                                value={formProps.values.firstName}
                            />

                            <TextInput
                                style={globalStyles.formInputStyle}
                                placeholder="Last Name"
                                onChangeText={formProps.handleChange("lastName")}
                                value={formProps.values.lastName}
                            />

                            <TextInput
                                style={globalStyles.formInputStyle}
                                placeholder="Email ID"
                                onChangeText={formProps.handleChange("email")}
                                value={formProps.values.email}
                            />

                            <TextInput
                                style={globalStyles.formInputStyle}
                                placeholder="Phone Number"
                                onChangeText={formProps.handleChange("phone")}
                                value={formProps.values.phone}
                                keyboardType="number-pad"
                            />
                            <TextInput
                                style={globalStyles.formInputStyle}
                                placeholder="Age"
                                onChangeText={formProps.handleChange("age")}
                                value={formProps.values.age}
                                keyboardType="numeric"
                            />

                            <TextInput
                                style={globalStyles.formInputStyle}
                                placeholder="Address"
                                onChangeText={formProps.handleChange("address")}
                                value={formProps.values.address}
                            />

                            <Button title="Submit" color="maroon" onPress={formProps.handleSubmit} />
                        </View>);
                    }}
                </Formik>
            </View>
        </Modal>
    );
}