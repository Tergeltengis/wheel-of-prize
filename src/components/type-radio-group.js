import React from "react";
import { Form, Radio } from "semantic-ui-react";

export const TypeRadioGroup = ({ setIsChair, isChair }) => {
  const handleChange = (e, { value }) => setIsChair(value);
  return (
    <Form className="flex flex-col">
      <div className="flex" style={{ gap: 10 }}>
        <Form.Field>
          <Radio
            label="Ширээ"
            name="radioGroupType"
            value={0}
            checked={isChair === 0}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Сандал"
            name="radioGroupType"
            value={1}
            checked={isChair === 1}
            onChange={handleChange}
          />
        </Form.Field>
      </div>
    </Form>
  );
};
