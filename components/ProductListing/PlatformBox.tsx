import { typography } from '@/constants/typography';
import { BlurView } from 'expo-blur';
import { ImageSource } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import PlatformIcon from './PlatformIcon';

interface PlatformBoxProperties {
    icon: ImageSource;
    platformName: string;
}

export default function PlatformBox(properties: PlatformBoxProperties) {
    return (
        <BlurView
            intensity={50}
            tint="dark"
            style={styles.container}
        >
            <View style={styles.overlay} />
            <PlatformIcon
                image={properties.icon}
            />
            <Text style={styles.text}>
                {properties.platformName}
            </Text>
        </BlurView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        overflow: 'hidden',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    text: {
        ...typography.semiBold,
        fontSize: 10,
        color: "#fff"
    }

})