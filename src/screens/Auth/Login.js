import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import images from '../../assets/images';
import {fontScale, scale, vScale} from '../../themes/Scale';
import ContainerView from '../../components/shared/ContainerView';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';
import AppInput from '../../components/shared/AppInput';
import Spacer from '../../components/shared/Spacer';
import AppButton from '../../components/shared/AppButton';
import {tagLoggedIn} from '../../redux/actions/logged';
import {useFormik, validateYupSchema} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {setUserInfo} from '../../store/user';
import {login} from '../../apis';
import {storeUserData} from '../../storge';

const passwordRgx = '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState('User');
  // const [password, setPassword] = useState('');

  // const onSubmit = () => {
  //   dispatch(tagLoggedIn(true));
  //   console.log(`User Email : ${email} , User Password : ${password}`);
  // };

  // using formik & Yup for form & validation =>
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('please enter a valid email')
      .required('please enter email'),
    password: Yup.string()
      .required('please enter password')
      .min(8, 'password should be >= characters'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => handleSubmit(values),
  });

  const handleSubmit = async values => {
    const response = await login(values.email, values.password);
    console.log(
      'response from Login from loginScreen',
      values.email,
      values.password,
    );
    if (response.idToken) {
      dispatch(setUserInfo(response));
      storeUserData(response);
    }
  };

  return (
    <ContainerView>
      <Image source={images.orangeSmallLogo} style={styles.logo} />
      <Text style={styles.title}>Logging</Text>
      <Text style={styles.subTitle}>Enter your emails and password</Text>
      <AppInput
        label="Email"
        placeholder="Enter your email ..."
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        errorMessage={formik.touched.email && formik.errors.email}
        onBlur={() => formik.setFieldTouched('email')}
      />
      <Spacer space={32} />
      <AppInput
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        errorMessage={formik.touched.email && formik.errors.password}
        onBlur={() => formik.setFieldTouched('password')}
      />
      <Pressable>
        <Text style={styles.forgotPassText}>Forgot Password ? </Text>
      </Pressable>
      <Spacer space={32} />
      <AppButton title="Login" onPress={formik.handleSubmit} />
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={styles.signupColor}>Singup</Text>
        </Text>
      </Pressable>
    </ContainerView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    width: scale(48),
    height: vScale(56),
    alignSelf: 'center',
    marginTop: vScale(77),
    marginBottom: vScale(100),
  },
  title: {
    color: Colors.black,
    fontSize: fontScale(26),
    fontFamily: Font.Bold,
    marginStart: scale(25),
  },
  subTitle: {
    color: Colors.black,
    fontSize: fontScale(16),
    fontFamily: Font.Medium,
    opacity: 0.5,
    marginTop: vScale(10),
    marginStart: scale(25),
    marginBottom: vScale(40),
  },
  forgotPassText: {
    color: Colors.black,
    fontFamily: Font.Regular,
    textAlign: 'right',
    fontSize: fontScale(14),
    marginEnd: scale(10),
    marginTop: vScale(10),
  },
  signupText: {
    alignSelf: 'center',
    fontSize: fontScale(14),
    color: Colors.black,
    fontFamily: Font.Regular,
    marginTop: vScale(10),
  },
  signupColor: {
    color: Colors.mainColor,
  },
});
