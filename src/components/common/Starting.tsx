import { View, StyleSheet } from 'react-native';

type StartingProps = {
  children: React.ReactNode; 
};

const Starting = ({ children }: StartingProps) => {
  return (
    <View style={styles.container}>
      {children} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Starting;
