import React from "react";
import { Box, Flex } from "grid-styled";
import reactElementToJSXString from "react-element-to-jsx-string";

import Card from "metabase/components/Card";

import Heading from "metabase/components/type/Heading";
import Subhead from "metabase/components/type/Subhead";
import Label from "metabase/components/type/Label";
import Text from "metabase/components/type/Text";

const Example = ({ children }) => (
  <Box my={3}>
    <Label color="medium">Example</Label>
    <Card>
      <Flex p={2} align="center" className="border-bottom">
        {children}
      </Flex>
      <pre>
        <code>{reactElementToJSXString(children)}</code>
      </pre>
    </Card>
  </Box>
);

const TypePage = () => (
  <Box className="wrapper wrapper--trim">
    <Heading mt="32px">Typography</Heading>
    <Text>Components for headings and text.</Text>
    <Box>
      <Subhead mt="32px" mb="32px">
        Reference
      </Subhead>

      <table className="Table">
        <thead>
          <th>Name</th>
          <th>Size</th>
          <th>Weight</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <Heading>Heading</Heading>
            </td>
            <td>
              <Heading>32px</Heading>
            </td>
            <td>
              <Heading>900</Heading>
            </td>
          </tr>
          <tr>
            <td>
              <Subhead>Subhead</Subhead>
            </td>
            <td>
              <Subhead>18px</Subhead>
            </td>
            <td>
              <Subhead>700</Subhead>
            </td>
          </tr>
          <tr>
            <td>
              <Label>Label</Label>
            </td>
            <td>
              <Label>14px</Label>
            </td>
            <td>
              <Label>700</Label>
            </td>
          </tr>
          <tr>
            <td>
              <Text>Text</Text>
            </td>
            <td>
              <Text>14px</Text>
            </td>
            <td>
              <Text>700</Text>
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
    <Box>
      <Subhead mt="32px" mb="32px" id="components">
        Components
      </Subhead>
      <Box mb={3}>
        <Subhead id="heading">Heading</Subhead>
        <Text>Used for page headings, etc</Text>

        <Example>
          <Heading>Title o' the page</Heading>
        </Example>
      </Box>
      <Box mb={3}>
        <Subhead id="heading">Subhead</Subhead>
        <Text>
          A smaller, but still noticeable heading. Good to use for section
          headings, or sidebar titles.
        </Text>
        <Example>
          <Subhead>An interesting section</Subhead>
        </Example>
      </Box>
      <Box mb={3}>
        <Subhead id="heading">Label</Subhead>
        <Text>
          A UI label style type element. Good to use for most anything that
          someone will click on or that represents a label for a section orc
        </Text>
        <Label>Example</Label>
        <pre>
          <code>
            <Heading>Title o' the page</Heading>
          </code>
        </pre>
      </Box>
    </Box>
  </Box>
);

export default TypePage;
