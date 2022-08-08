"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFormSuggested = void 0;
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var NutrientInputForm_1 = require("./NutrientInputForm");
var SearchInput_1 = require("./SearchInput");
var QueryTextField_1 = require("./QueryTextField");
var TypeDropDown_1 = require("./TypeDropDown");
var SearchFormSuggested = function (_a) {
    var route = _a.route, values = _a.values, handleRouteChange = _a.handleRouteChange, handleInputChange = _a.handleInputChange, handleTypeSelect = _a.handleTypeSelect, goals = _a.goals, handleSuggestedSubmit = _a.handleSuggestedSubmit;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { onSubmit: handleSuggestedSubmit },
            react_1.default.createElement(material_1.Stack, { spacing: 3 },
                react_1.default.createElement(material_1.Typography, { variant: 'subtitle2' },
                    ' ',
                    "Suggested goals are calculated based on recommend amounts per meal, considering 3 meals are had per day."),
                react_1.default.createElement(SearchInput_1.SearchInput, { route: route, handleRouteChange: handleRouteChange }),
                react_1.default.createElement(QueryTextField_1.QueryTextField, { query: values.query, handleInputChange: handleInputChange }),
                react_1.default.createElement(TypeDropDown_1.TypeDropDown, { type: values.type, handleTypeSelect: handleTypeSelect }),
                react_1.default.createElement(material_1.Typography, { variant: 'h6' }, "Choose Calorie Range"),
                react_1.default.createElement(NutrientInputForm_1.NutrientInputForm, { handleInputChange: handleInputChange, measurement: 'kcal', nutrient: 'Calories', minValue: goals.min_calories_per_meal, maxValue: goals.max_calories_per_meal }),
                react_1.default.createElement(material_1.Typography, { variant: 'h6' }, "Choose Carb Range"),
                react_1.default.createElement(NutrientInputForm_1.NutrientInputForm, { handleInputChange: handleInputChange, measurement: 'g', nutrient: 'Carbs', minValue: goals.min_carbs_per_meal, maxValue: goals.max_carbs_per_meal }),
                react_1.default.createElement(material_1.Typography, { variant: 'h6' }, "Choose Protein Range"),
                react_1.default.createElement(NutrientInputForm_1.NutrientInputForm, { handleInputChange: handleInputChange, measurement: 'g', nutrient: 'Protein', minValue: goals.min_protein_per_meal, maxValue: goals.max_protein_per_meal }),
                react_1.default.createElement(material_1.Typography, { variant: 'h6' }, "Choose Fat Range"),
                react_1.default.createElement(NutrientInputForm_1.NutrientInputForm, { handleInputChange: handleInputChange, measurement: 'g', nutrient: 'Fat', minValue: goals.min_fat_per_meal, maxValue: goals.max_fat_per_meal }),
                react_1.default.createElement(material_1.Button, { type: 'submit', variant: 'contained' }, "Submit")))));
};
exports.SearchFormSuggested = SearchFormSuggested;
//# sourceMappingURL=SearchFormSuggested.js.map