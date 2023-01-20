
CREATE TABLE user_daily_goals (
	id bigserial NOT NULL PRIMARY KEY,
    user_id bigint unique,
    total_carbohydrates integer,
    total_protein integer,
    total_fat integer,
    total_calories integer,
    water integer,
    steps integer,
    calories_to_burn integer
);

