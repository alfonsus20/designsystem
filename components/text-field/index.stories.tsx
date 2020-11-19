import * as React from "react";
import { Stack } from "../_foundations/common";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import PersonIcon from '@material-ui/icons/Person';

import {
  SystemWrapper,
  SystemBlock,
  ComponentBlock,
} from "../_utils/storybook";
import Input from "./component/Input";
import { useState } from "react";

export default {
  title: "Component|Input",
  // component: [Tabs, TabPane],
  decorators: [SystemWrapper, withKnobs],
};

export const Default = () => {
  const [value, setValue] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Field">
      <Stack spacing="xl">
        <Input value={value} handleChange={(e) => setValue(e.target.value)} />
      </Stack>
    </SystemBlock>
  );
};

export const Placeholder = () => {
  const [value, setValue] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Field">
      <Stack spacing="xl">
        <Input
          placeholder="Full Name"
          value={value}
          handleChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const HintText = () => {
  const [value, setValue] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Field">
      <Stack spacing="xl">
        <Input
          hintText="Type Your Hint Text Here"
          placeholder="Full Name"
          value={value}
          handleChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const TypeNumber = () => {
  const [value, setValue] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Field">
      <Stack spacing="xl">
        <Input
          placeholder="Age"
          type="number"
          value={value}
          handleChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Warning = () => {
  const [value, setValue] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Field">
      <Stack spacing="xl">
        <Input
          hintText="Warning Text"
          action="warning"
          placeholder="Warning Placholder"
          value={value}
          handleChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Error = () => {
  const [value, setValue] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Field">
      <Stack spacing="xl">
        <Input
          hintText="Error Text"
          action="error"
          placeholder="Error Placholder"
          value={value}
          handleChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Disabled = () => (
  <SystemBlock title="BCC Design System - Input">
    <Stack spacing="xl">
      <Input disabled />
    </Stack>
  </SystemBlock>
);

export const Success = () => {
  const [value, setValue] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Field">
      <Stack spacing="xl">
        <Input
          hintText="Success Text"
          placeholder="Filled Text"
          value={value}
          success={true}
          handleChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const Skeleton = () => {
  const [value, setValue] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Field">
      <Stack spacing="xl">
        <Input
          hintText="Loading ..."
          placeholder="Filled Text"
          value={value}
          className="skeleton"
          handleChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </SystemBlock>
  );
};

export const WithIcon = () => {
  const [value, setValue] = useState("");
  return (
    <SystemBlock title="BCC Design System - Text Field">
      <Stack spacing="xl">
        <Input
          hintText="Hint Text"
          placeholder="Filled Text"
          value={value}
          handleChange={(e) => setValue(e.target.value)}
          icon = {<PersonIcon/>}
        />
      </Stack>
    </SystemBlock>
  );
};
