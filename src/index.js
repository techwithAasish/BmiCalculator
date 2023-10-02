import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import Test from './test';

const BMICalculator = () => {
  // variables
  const [feet, setFeet] = useState('');
  const [inch, setInch] = useState('');
  const [pound, setPound] = useState('');
  const [centimeter, setCentimeter] = useState('');
  const [kilogram, setKilogram] = useState('');
  const [bmi, setBMI] = useState(null);
  const [standard, setStandard] = useState(true);

  // handling STANDARD BUTTON
  const calculateBMI = () => {
    if (feet && pound) {
      const feetInMeters = parseFloat(feet) * 12;
      const heightInInches = feetInMeters + parseFloat(inch);
      const feetValue =
        (parseFloat(pound) / (heightInInches * heightInInches)) * 703;
      console.log(feetValue);
      setBMI(feetValue.toFixed(2));
    }
  };
  // handling METRIC BUTTON
  const calculateBMI2 = () => {
    if (centimeter && kilogram) {
      const centiInMeters = parseFloat(centimeter) / 100;
      const centimeterValue =
        parseFloat(kilogram) / (centiInMeters * centiInMeters);
      setBMI(centimeterValue.toFixed(2));
    }
  };

  // handling BMI category
  const getBMICategory = () => {
    if (bmi === null) {
      return 'Enter Height and Weight';
    } else if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi < 24.9) {
      return 'Normal Weight';
    } else if (bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <View style={styles.switch}>
        <Button
          title="STANDARD"
          onPress={() => {
            setStandard(true);
            // console.log(standard);
          }}
        />
        <Button
          title="METRIC"
          onPress={() => {
            setStandard(false);
            // setMetric(true);
          }}
        />
      </View>
      {standard ? (
        <View>
          <View style={styles.heightField}>
            <Text style={styles.height}>Your Height:</Text>
            <View>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={text => setFeet(text)}
                value={feet}
              />
              <Text style={styles.height}>(feet)</Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                // keyboardType="numeric"
                onChangeText={text => setInch(text)}
                value={inch}
              />
              <Text style={styles.height}>(inches)</Text>
            </View>
          </View>
          <View style={styles.heightField}>
            <Text style={styles.height}>Your Weight:</Text>
            <View>
              <TextInput
                style={styles.input}
                // keyboardType="numeric"
                onChangeText={text => setPound(text)}
                value={pound}
              />
              <Text style={styles.height}>(pounds)</Text>
            </View>
          </View>

          {/* button */}
          <View style={styles.btn1}>
            <Button title="Calculate BMI" onPress={calculateBMI} />
          </View>
          <View style={styles.bmi}>
            <Text style={styles.height}>Your BMI:</Text>
            <View>
              <Text style={styles.resultField}>{bmi}</Text>
              <View></View>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.heightField}>
            <Text style={styles.height}>Your Height:</Text>
            <View>
              <TextInput
                style={styles.input}
                // keyboardType="numeric"
                onChangeText={text => setCentimeter(text)}
                value={centimeter}
              />
              <Text style={styles.height}>(centimeters)</Text>
            </View>
          </View>

          <View style={styles.heightField}>
            <Text style={styles.height}>Your Weight:</Text>
            <View>
              <TextInput
                style={styles.input}
                // keyboardType="numeric"
                onChangeText={text => setKilogram(text)}
                value={kilogram}
              />
              <Text style={styles.height}>(kilograms)</Text>
            </View>
          </View>
          <View style={styles.btn1}>
            <Button title="Calculate BMI" onPress={calculateBMI2} />
          </View>
          <View style={styles.bmi}>
            <Text style={styles.height}>Your BMI:</Text>
            <View>
              <Text style={styles.resultField}>{bmi}</Text>
              {/* <Text style={styles.height}>(centimeters)</Text> */}
            </View>
          </View>
        </View>
      )}
      <View>
        {bmi !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Category: {getBMICategory()}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  switch: {
    marginLeft: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignContent: 'space-around',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
    textAlign: 'center',
  },
  heightField: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 40,
    fontSize: 40,
    width: 200,
    height: 40,
    marginLeft: 40,
  },
  height: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  input: {
    width: 60,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  btn1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  bmi: {
    flexDirection: 'row',
    marginTop: 20,
    fontSize: 40,
    width: 200,
    height: 40,
    marginLeft: 40,
  },
  resultField: {
    width: 100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 25,
    justifyContent: 'center',
    marginLeft: 30,
  },
});

export default BMICalculator;
