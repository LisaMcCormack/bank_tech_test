# THERMOSTAT 

## Specification 
- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
- (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)


## Spec 1
- Created a thermometer constructor function with a default state variable.

## Spec 2
- Created a function within the constructor that edits the private state variable with a increment operator. 

## Spec 3 
- Created a function within the constructor that edits the private state variable with a decrement operator.

## Spec 4 
- Created a custom error that throws an exception if the decrement function causes the object's temperature to go below a minimum integer. 