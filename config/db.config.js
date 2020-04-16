const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'reset123#',
  port: 5432,
});

/**
 * Create Tables
 */
const createTables = () => {
  console.log("create table...");
  const queryText =
    `CREATE TABLE IF NOT EXISTS
    tbl_equipment(
    auto_id_sql integer NOT NULL,

    buffer_days_after integer,

    buffer_days_before integer,

    equipment_type character varying(255) COLLATE pg_catalog."default",

    equipment_age numeric(15,4),

    equipment_booked_by_rep_name character varying(255) COLLATE pg_catalog."default",

    equipment_booked_from_date date,

    equipment_booked_to_client_name character varying(255) COLLATE pg_catalog."default",

    equipment_booked_until_date date,

    equipment_cluster_code character varying(255) COLLATE pg_catalog."default",

    equipment_condition character varying(255) COLLATE pg_catalog."default",

    equipment_current_value_currency character varying(255) COLLATE pg_catalog."default",

    equipment_current_value_date date,

    equipment_display_name character varying(255) COLLATE pg_catalog."default",

    equipment_igor_code character varying(255) COLLATE pg_catalog."default",

    equipment_igor_name character varying(255) COLLATE pg_catalog."default",

    equipment_is_available character varying(255) COLLATE pg_catalog."default",

    equipment_is_rental character varying(255) COLLATE pg_catalog."default",

    equipment_item_class character varying(255) COLLATE pg_catalog."default",

    equipment_key character varying(255) COLLATE pg_catalog."default",

    equipment_location_current character varying(255) COLLATE pg_catalog."default",

    equipment_material_code character varying(255) COLLATE pg_catalog."default",

    equipment_material_description character varying(255) COLLATE pg_catalog."default",

    equipment_open_sales_order character varying(255) COLLATE pg_catalog."default",

    equipment_order_line character varying(255) COLLATE pg_catalog."default",

    equipment_origin_date date,

    equipment_original_cost_currency character varying(255) COLLATE pg_catalog."default",

    equipment_pi character varying(255) COLLATE pg_catalog."default",

    equipment_plant_code character varying(255) COLLATE pg_catalog."default",

    equipment_product_family character varying(255) COLLATE pg_catalog."default",

    equipment_product_line character varying(255) COLLATE pg_catalog."default",

    equipment_profit_center character varying(255) COLLATE pg_catalog."default",

    equipment_quantity_blocked character varying(255) COLLATE pg_catalog."default",

    equipment_quantity_unrestricted character varying(255) COLLATE pg_catalog."default",

    equipment_serial_number character varying(255) COLLATE pg_catalog."default",

    equipment_serialized character varying(255) COLLATE pg_catalog."default",

    equipment_site_location_code character varying(255) COLLATE pg_catalog."default",

    equipment_site_location_description character varying(255) COLLATE pg_catalog."default",

    equipment_unique_id character varying(255) COLLATE pg_catalog."default",

    equipment_description character varying(255) COLLATE pg_catalog."default",

    equipment_classification character varying(255) COLLATE pg_catalog."default",

    equipment_installation_required character varying(255) COLLATE pg_catalog."default",

    equipment_booking_buffer_demo character varying(255) COLLATE pg_catalog."default",

    equipment_home_location character varying(255) COLLATE pg_catalog."default",

    equipment_movable_asset character varying(255) COLLATE pg_catalog."default",

    equipment_layer_of_perimeter character varying(255) COLLATE pg_catalog."default",

    equipment_salable character varying(255) COLLATE pg_catalog."default",

    equipment_condition_comments character varying(255) COLLATE pg_catalog."default",

    equipment_usage_comments character varying(255) COLLATE pg_catalog."default",

    boomi_time_last_udpated date,

    equipment_current_value numeric(15,4),

    equipment_original_cost numeric(15,4),

    equipment_depreciation_current_month numeric(15,4),

    equipment_depreciation_to_date numeric(15,4),

    equipment_standard_cost_quantity numeric(15,4),

    equipment_net_book_new_in_value_period numeric(15,4)
)
WITH (
    OIDS = FALSE
)`;

  pool.query(queryText)
    .then((res) => {
      // pool.end();
    })
    .catch((err) => {
     // pool.end();
    });
}

// /**
//  * Drop Tables
//  */
// const dropTables = () => {
//   const queryText = 'DROP TABLE IF EXISTS reflections';
//   pool.query(queryText)
//     .then((res) => {
//       console.log(res);
//       pool.end();
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     });
// }

// pool.on('remove', () => {
//   process.exit(0);
// });


exports.db = pool;
exports.createTables = createTables;
