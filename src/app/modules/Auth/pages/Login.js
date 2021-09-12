import React, { useState ,useReducer} from "react";
import clsx from 'clsx';
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

function Login(props) {
  const classes = useStyles();

  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = React.useState({
    username : '',
    password: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.persist()
    e.preventDefault()


    console.log(e);
    setSubmitting(true);

    console.log(values);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
    // let user = {}
    // user = Array.from(e.target.elements).map(x => {

    //   console.log(x);
    //   user[x.name] = x.value
    // })
    // console.log(user)


  }
  return (
    <div className="mainHeading">


      <div className="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-10 offset-xs-1">
        {/* <div className="col-md-4 offset-md-4"> */}
        <Card style={{ borderRadius: 15 }}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <img
                style={{
                  width: "252px",
                  marginRight: "127px"
                }}
                alt="Logo"
                src={toAbsoluteUrl("/media/logos/logonew.png")}
              />
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  value={values.username}
                  onChange={handleChange('username')}
                  id="email"
                  label="username"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <FormControl fullWidth className={clsx(classes.margin)} variant="outlined" >
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          style={{
                            backgroundColor: "#287cbc", borderRadius: "0px",
                            height: "50px",
                            color: "white",
                          }}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />

                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  // color="primary"
                  className={classes.submit}
                // onSubmit={handleSubmit}
                >
                  Login
                </Button>
                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}

                {/* <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid> */}
              </form>
            </div>
            {/* <Box mt={8}>
              <Copyright />
            </Box> */}
          </Container>
        </Card>
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    backgroundColor: "#287cbc",
    borderRadius: 25
  },
  // textField: {
  //   width: '40ch',
  // },
  margin: {
    margin: theme.spacing(0),
  },

}));


export default injectIntl(connect(null, auth.actions)(Login));
