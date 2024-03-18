import React, { useState, useEffect } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

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
import { jwtDecode } from "jwt-decode";

export default function SignUpPage(props) {
  const navigate = useNavigate();
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

  return (
    <div className={styles.container}>
      <Paper className={styles.paper} radius="md" p="xl" withBorder {...props}>
        <Text size="lg" fw={500}>
          Welcome to Mantine, Sign Up with
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              var credentialResponseDecoded = jwtDecode(
                credentialResponse.credential
              );
              console.log("Login Success", credentialResponseDecoded);
            }}
            onError={(error) => {
              console.log("Login Failed", error);
            }}></GoogleLogin>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

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
    </div>
  );
}
