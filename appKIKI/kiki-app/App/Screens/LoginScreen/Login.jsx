import { View, Image, SafeAreaView, StyleSheet,Text,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../../../theme'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'


export default function Login() {
    return (
        <View style={styles.container}>
          <Image 
            source={require('../../../assets/background-login.png')}
            style={styles.backgroundImage}
          />
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.formContainer}>
                
                <Text style={styles.welcomeText}>Welcome!</Text>
                <Text style={styles.text}>Enter your credentials to log in your account</Text>
                <Text style={styles.textInput}>Email Address</Text>
                <TextInput 
                style={styles.input}
                placeholder="email"
                value="alexa@gmail.com" 
                />
                <Text style={styles.textInput}>Password</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry
                    placeholder="password"
                    value="test12345" 
                />
                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.loginButton}
                >
                <Text 
                    style={styles.loginButtonText}
                >
                    Login
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center',     // Centra horizontalmente
      },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginLeft: 4,
    marginBottom: 30,
  },
  textInput: {
    color: 'white',
    marginLeft: 4,
    alignSelf: 'flex-start',
    fontWeight: 'bold', 
    marginBottom: 10,
  },
  input: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    marginBottom: 10,
    width: 300,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'white',
  },
  loginButton: {
    padding: 15,
    backgroundColor: '#61BD91',
    borderRadius: 20,
    width: 300,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});