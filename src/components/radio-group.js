import React from "react";
import { Form, Radio } from "semantic-ui-react";

export const RadioGroup = ({ setPrize, prize }) => {
  const handleChange = (e, { value }) => setPrize(value);
  return (
    <Form className="flex flex-col">
      <div className="flex" style={{ gap: 10 }}>
        <Form.Field>
          <Radio
            label="100'000₮"
            name="radioGroup"
            value="100000"
            checked={prize === "100000"}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="300'000₮"
            name="radioGroup"
            value="300000"
            checked={prize === "300000"}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="500'000₮"
            name="radioGroup"
            value="500000"
            checked={prize === "500000"}
            onChange={handleChange}
          />
        </Form.Field>
      </div>
    </Form>
  );
};