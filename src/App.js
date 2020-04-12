import React from "react";
import { Formik } from "formik";
import axios from "axios";
import Dropdown from "./components/dropdown";

function App() {
  return (
    <div className="App">
      <h1>Granola Grazer</h1>
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
          await axios.post("/recipe", {
            values,
          });
        }}
      >
        {({ values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="base">Base</label>
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
    </div>
  );
}

export default App;
