import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { useColorMode, useColorModeValue, Box } from "@chakra-ui/react";

const plugins = [
  "autoresize",
  "codesample",
  "lists",
  "link",
  "quickbars",
  "visualchars",
  "advlist",
  "autolink",
  "visualblocks",
  "code",
  "fullscreen",
];

const toolbar =
  "undo redo | formatselect | " +
  "bold italic code | backcolor forecolor | alignleft aligncenter " +
  "alignright alignjustify | outdent indent | " +
  "bullist numlist | codesample removeformat";
function RTEditor({ name, control }) {
  const { colorMode } = useColorMode();
  const [dark, setDark] = useState(null);

  useEffect(() => setDark(colorMode === "dark"), [colorMode]);

  const skin = dark ? "oxide-dark" : "oxide";
  const content = dark ? "dark" : "";
  return (
    <Box
      width="100%"
      sx={{
        "& .tox": {
          "&.tox-tinymce": {
            borderRadius: 0,
            border: "4px solid",
            borderColor: "secondary",
            transitionProperty: "common",
            transitionDuration: "normal",
            "&:focus, &:hover": {
              border: "4px solid",
              borderColor: "secondary",
              boxShadow: "sm",
            },
          },
          "& .tox-mbtn": {
            color: "primary",
          },
          "& .tox-tbtn": {
            color: "primary",
            svg: {
              fill: "primary",
            },
            "&.tox-tbtn--disabled": {
              color: "purple.100",
              svg: {
                fill: "purple.100",
              },
            },
          },
        },
      }}
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, ref, ...fieldProps } }) => (
          <Editor
            apiKey={process.env.REACT_APP_TINY_API}
            ref={ref}
            value={value}
            onEditorChange={onChange}
            plugins={plugins}
            toolbar={toolbar}
            {...fieldProps}
            skin
            init={{
              width: "100%",
              skin,
              content_css: content,
            }}
          />
        )}
      />
    </Box>
  );
}

export default RTEditor;
