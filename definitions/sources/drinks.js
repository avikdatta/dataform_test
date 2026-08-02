declare({
  name: "drinks",
  schema: "raw_data",
  columns: {
    drink_id: "INT64",
    drink_name: "STRING",
    drink_type: "STRING",
    calories: "INT64",
    date: "DATE",
    price: "FLOAT64"
  }
});