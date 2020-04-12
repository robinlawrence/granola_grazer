import React from "react";
import { Formik } from "formik";
import axios from "axios";
import Dropdown from "../dropdown";
import { useHistory } from "react-router";

const generateRecipe = (ingredients, servings) => {
  const ratios = {
    base: 1.5,
    driedFruit: 0.5,
    nuts: 1,
    seeds: 0.25,
    sweetener: 0.25,
    oil: 0.25,
    spices: 0.04,
    extras: 0.5,
  };

  const ingredientRatios = {};

  Object.entries(ingredients).forEach((entry) => {
    ingredientRatios[entry[0]] = ratios[entry[0]] * servings;
  });
  return ingredientRatios;
};

function GranolaForm() {
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        base: "",
        driedFruit: "",
        nuts: "",
        seeds: "",
        sweetener: "",
        oil: "",
        spices: "",
        extras: "",
      }}
      onSubmit={async (values) => {
        const ratios = generateRecipe(values, 2);
        const complete = await axios.post("/recipe", {
          ratios,
        });

        if (complete) {
          history.push("/complete");
        }
      }}
    >
      {({ values, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Dropdown
            name="base"
            options={[
              { value: "oatmeal", name: "Oatmeal" },
              { value: "barley", name: "Barley" },
            ]}
          />
          <Dropdown
            name="nuts"
            options={[
              { value: "walnuts", name: "Walnuts" },
              { value: "pecans", name: "Pecans" },
            ]}
          />
          <Dropdown
            name="seeds"
            options={[
              { value: "sunflower", name: "Sunflower" },
              { value: "hemp", name: "Hemp" },
            ]}
          />
          <Dropdown
            name="driedFruit"
            options={[
              { value: "cranberries", name: "Cranberries" },
              { value: "raisins", name: "Raisins" },
            ]}
          />
          <Dropdown
            name="oil"
            options={[
              { value: "coconut", name: "Coconut" },
              { value: "olive", name: "Olive" },
            ]}
          />
          <Dropdown
            name="spices"
            options={[
              { value: "cinnamon", name: "Cinnamon" },
              { value: "nutmeg", name: "Nutmeg" },
            ]}
          />
          <Dropdown
            name="sweetner"
            options={[
              { value: "honey", name: "Honey" },
              { value: "mapleSyrup", name: "Maple Syrup" },
            ]}
          />
          <Dropdown
            name="extras"
            options={[
              { value: "coconut", name: "Coconut Shreds" },
              { value: "chocolate", name: "Chocolate" },
            ]}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default GranolaForm;
