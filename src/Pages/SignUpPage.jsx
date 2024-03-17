import React, { useState, useEffect } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Link, NavLink } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
// import { GoogleButton } from "./GoogleButton";
// import { TwitterButton } from "./TwitterButton";
import styles from "../sass/SignUpPage.module.scss";

export default function SignUpPage(props) {
  const clientId =
    "100841111499-io0ohnoerlem9lrulmsh0s2qsavmsmv4.apps.googleusercontent.com";
  const [profile, setProfile] = useState([]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({ clientId: clientId, scope: "" });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    console.log("Login Success: currentUser:", res);
  };
  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };
  const logOut = () => {
    setProfile(null);
  };

  return (
    <Paper className={styles.paper} radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to Mantine, Sign Up with
      </Text>

      <Group grow mb="md" mt="md">
        <div>
          {profile ? (
            <div>
              <img src={profile.imageUrl} alt="user image" />
              <GoogleLogout
                clientId={clientId}
                buttonText="Log out"
                onLogoutSuccess={logOut}></GoogleLogout>
            </div>
          ) : (
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          )}
        </div>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          <TextInput
            required
            label="Name"
            placeholder="Your name"
            value={form.values.name}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            radius="md"
          />

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />

          <Checkbox
            label="I accept terms and conditions"
            checked={form.values.terms}
            onChange={(event) =>
              form.setFieldValue("terms", event.currentTarget.checked)
            }
          />
        </Stack>

        <Group justify="space-between" mt="xl">
          <NavLink to="/login">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => {}}
              size="xs"
              className={styles.anchor}>
              Already have an account? Login
            </Anchor>
          </NavLink>
          <Button type="submit" radius="xl">
            Sign Up
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
