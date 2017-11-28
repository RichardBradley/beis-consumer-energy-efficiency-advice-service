module.exports = [
    {
        tableName: 'gas-and-oil-boiler.json',
        tableNumber: 105,
        dataFormatNumber: 210,
        // The JSON file for the whole table is large (11MB). For the Alpha PoC we truncate the table to keep the file
        // size below 1MB, and only use a subset of boilers. In the Beta we will have one endpoint exposing very basic
        // details for all boilers, and then another endpoint exposing full details for one boiler type.
        maxRows: 500,
        columnHeadings: [
            'productIndexNumber',
            'manufacturerRefNo',
            'status',
            'dateUpdated',
            'manufacturerName',
            'brandName',
            'modelName',
            'modelQualifier',
            'boilerId',
            'firstYearOfManufacture',
            'finalYearOfManufacture',
            'fuel',
            'mountingPosition',
            'exposureRating',
            'mainType',
            'subsidiaryType',
            'subsidiaryTypeTable',
            'subsidiaryTypeIndex',
            'condensing',
            'flueType',
            'fanAssistance',
            'boilerPowerBottomOfRange',
            'boilerPowerTopOfRange',
            'energyEfficiencyClass',
            'annualSeasonalEfficiency',
            'sapWinterSeasonalEfficiency',
            'sapSummerSeasonalEfficiency',
            'hotWaterEfficiency1',
            'hotWaterEfficiency2',
            'sap2005SeasonalEfficiency',
            'efficiencyCategory',
            'testGasForLpg',
            'testCorrectionForLpg',
            'sapEquationUsed',
            'ignition',
            'burnerControl',
            'electricalPowerWhileBoilerIsFiring',
            'electricalPowerWhileBoilerIsNotFiring',
            'storeType',
            'storeLossInTest',
            'separateStore',
            'storeBoilerVolume',
            'storeSolarVolume',
            'storeInsulationThickness',
            'storeInsulationType',
            'storeTemperature',
            'storeHeatLossRate',
            'separateDhwTests',
            'fuelEnergyForHwTest1',
            'electricalEnergyForHwTest1',
            'rejectedEnergyInHwTest1',
            'storageLossFactorF1',
            'fuelEnergyForHwTest2',
            'electricalEnergyForHwTest2',
            'rejectedEnergyInHwTest2',
            'storageLossFactorF2',
            'rejectedFactorF3',
            'keepHotFacility',
            'keepHotTimer',
            'keepHotElectricHeater',
            'controlCapabilities'
        ]
    }
];