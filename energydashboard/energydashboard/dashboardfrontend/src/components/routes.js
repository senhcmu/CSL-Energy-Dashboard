import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './views/NewHome/HomeView';
import RatingSystemView from './views/RatingSystem/RatingSystemView';
import EcohouseView from './views/Ecohouse/EcohouseView';
import EnvImpactView from './views/EnvImpact/EnvImpactView';
import FeedbackView from './views/Feedback/FeedbackView';
import BuildingView from './views/Building/BuildingView';
import SustainableDesignView from './views/SustainableDesign/SustainableDesignView';
import NaturalResourcesView from './views/NaturalResource/NaturalResourcesView';
import EnergyConsumptionView from './views/EnergyConsumption/EnergyConsumptionView';
import SunnyView from './views/EnergyConsumption/Solar/SunnyView';
import CloudyView from './views/EnergyConsumption/Solar/CloudyView';
import GeoPortionView from './views/EnergyConsumption/Geothermal/GeoPortionView';
import SankeyView from './views/EnergyConsumption/Sankey/SankeyView';
import SolarPowerView from './views/SolarPower/SolarPower';
import GeothermalView from './views/Geothermal/GeothermalView';
import WaterView from './views/Water/WaterView';
import LightingView from './views/Lighting/LightingView';
// import Home from './views/CHome/index.jsx';





const BaseRouter = () => (
	<div>
		<Switch>
		<Route exact path='/energyconsumption/' component={EnergyConsumptionView} />
        <Route exact path='/feedback/' component={FeedbackView} />
        <Route exact path='/ratingsystem/' component={RatingSystemView} />
        <Route exact path='/naturalresource/' component={NaturalResourcesView} />
        <Route exact path='/envimpact/' component={EnvImpactView} />
        <Route exact path='/sustainabledesign/' component={SustainableDesignView} />
        <Route exact path='/ecohouse/' component={EcohouseView} />
        <Route exact path='/solar/' component={SolarPowerView} />
        <Route exact path='/water/' component={WaterView} />
        <Route exact path='/lighting/' component={LightingView} />
        <Route exact path='/geothermal/' component={GeothermalView} />
        <Route exact path='/cslesc/' component={BuildingView} />
        <Route exact path='/sunny/' component={SunnyView} />
        <Route exact path='/cloudy/' component={CloudyView} />
        <Route exact path='/geo/' component={GeoPortionView} />
        <Route exact path='/sankey/' component={SankeyView} />
        <Route exact path='/' component={HomeView} />
	</Switch>

	</div>
	);

export default BaseRouter;


