import React, { useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import {
  Tabs,
  Tab,
  Button,
  Form,
  Checkbox,
  FormGroup,
  TextInput,
  RadioButtonGroup,
  RadioButton,
} from "carbon-components-react";

const fieldsetRadioProps = {
  className: "some-class",
  legendText: "Gender",
};
const fieldsetCheckboxProps = () => ({
  className: "some-class",
  legendText: text("Text in <legend> (legendText)", "Education"),
  message: boolean("Show form requirement (message)", false),
  messageText: text("Form requirement text (messageText)", ""),
  invalid: boolean("Mark as invalid (invalid)", false),
});
const checkboxEvents0 = {
  className: "some-class",
  labelText: "BE",
};
const checkboxEvents1 = {
  className: "some-class",
  labelText: "BSC",
};
const checkboxEvents2 = {
  className: "some-class",
  labelText: "other",
};
let data = [{}];
const LandingPage = () => {
  const [editParams, setEditParams] = useState({});
  const props = {
    tabs: {
      selected: 0,
      triggerHref: "#",
      role: "navigation",
    },
    tab: {
      href: "#",
      role: "presentation",
      tabIndex: 0,
    },
  };

  const onSubmit = (e) => {
    if (
      e.FIRSTNAME === undefined ||
      e.LASTNAME === undefined ||
      e.GENDER === undefined
    ) {
      console.log(">>null>>>");
      return;
    } else {
      data.push(e);
    }
  };

  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="About">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-4">
                    <Form>
                      <TextInput
                        name="FIRSTNAME"
                        id="fName"
                        invalidText="Invalid error message."
                        labelText="fName"
                        placeholder="Placeholder text"
                        onChange={(e) =>
                          setEditParams({
                            ...editParams,
                            FIRSTNAME: e.target.value,
                          })
                        }
                      />
                      <TextInput
                        name="LASTNAME"
                        id="lName"
                        invalidText="Invalid error message."
                        labelText="lName"
                        placeholder="Placeholder text"
                        onChange={(e) =>
                          setEditParams({
                            ...editParams,
                            LASTNAME: e.target.value,
                          })
                        }
                      />
                      <FormGroup {...fieldsetRadioProps}>
                        <RadioButtonGroup
                          name="GENDER"
                          // defaultSelected="Male"
                          onChange={(value) =>
                            setEditParams({
                              ...editParams,
                              GENDER: value,
                            })
                          }
                        >
                          <RadioButton
                            value="Male"
                            id="radio-1"
                            labelText="male"
                          />
                          <RadioButton
                            value="Female"
                            labelText="female"
                            id="radio-2"
                          />
                          <RadioButton
                            value="other"
                            labelText="other"
                            id="radio-4"
                            disabled
                          />
                        </RadioButtonGroup>
                      </FormGroup>
                      <FormGroup {...fieldsetCheckboxProps()}>
                        <Checkbox
                          name="CHECKBOX_1"
                          // defaultChecked
                          {...checkboxEvents0}
                          id="checkbox-1"
                          onChange={(e) =>
                            setEditParams({
                              ...editParams,
                              CHECKBOX_1: e,
                            })
                          }
                        />
                        <Checkbox
                          name="CHECKBOX_2"
                          {...checkboxEvents1}
                          id="checkbox-2"
                          onChange={(e) =>
                            setEditParams({
                              ...editParams,
                              CHECKBOX_2: e,
                            })
                          }
                        />
                        <Checkbox
                          disabled
                          {...checkboxEvents2}
                          id="checkbox-2"
                        />
                      </FormGroup>

                      <Button onClick={() => onSubmit(editParams)}>
                        Submit
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Design">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h2 className="landing-page__subheading">Design</h2>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Develop">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h2 className="landing-page__subheading">Design</h2>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
