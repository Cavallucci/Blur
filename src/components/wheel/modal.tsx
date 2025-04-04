import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';

type ModalPopUpProps = {
    isVisible: boolean;
    onBackdropPress: () => void;
    segments: string[];
    setSegments: (segments: string[]) => void;
    colors: string[];
    setColors: (colors: string[]) => void;
};

const ModalPopUp = ({ isVisible, onBackdropPress, segments, setSegments, colors, setColors }: ModalPopUpProps) => {
    const [value, setValue] = React.useState(segments.length.toString());

    return (
        <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
        <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Personnaliser la roue</Text>

            <Text>Nombre de quartiers :</Text>
            <Picker
                selectedValue={segments.length.toString()}
                style={styles.picker}
                onValueChange={(nb) => {
                    setValue(nb);
                }}
            >
                {[...Array(6).keys()].map((num) => (
                    <Picker.Item key={num + 1} label={`${num + 1}`} value={`${num + 1}`} />
                ))}
            </Picker>
            <Button title="valider" onPress={() => {
                const count = parseInt(value, 10);
                const newSegments = Array.from({ length: count }, (_, index) => segments[index] || '');
                setSegments(newSegments);
                const newColors = Array.from({ length: count }, (_, index) => colors[index] || '#000000');
                setColors(newColors);
                onBackdropPress();
            }}
            />
        </View>
    </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' },
    modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    picker: { width: 100 },
});

export default ModalPopUp;
