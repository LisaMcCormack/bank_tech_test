$(document).ready(function() {
  var thermostat = new ThermoStat();

  $('#temperature').text(thermostat.temperature());
  $('#power-saving-status').text(thermostat.psm());

  $('#temp-up').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature());
    changeBackgroundColour();
  });

  $('#temp-down').on('click', function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature());
    changeBackgroundColour();
  });


  $('#temp-reset').on('click', function() {
    thermostat.reset();
    $('#temperature').text(thermostat.temperature());
    changeBackgroundColour();
  });

  $('#powersaving-switch').on('click', function() {
    thermostat.PowerSavingSwitch();
    $('#power-saving-status').text(thermostat.psm());
  });

  changeBackgroundColour = function(){
    $('body').css('background-color', thermostat.EnergyUsage());
  };

});
