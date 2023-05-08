import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/semantic-ui";
import React, { useState } from "react";

const schema = {
  title: "Hello world",
  type: "object",
  properties: {
    lol: { type: "number", title: "Lol", minimum: 10 }
  }
};

const uiSchema = {};

export default function MyApp() {
  return (
    <div className="App">
      <Form
        schema={schema}
        validator={validator}
        uiSchema={uiSchema}
        onSubmit={(data) => {}}
      />
      <div>
        <pre></pre>
      </div>
    </div>
  );
}
