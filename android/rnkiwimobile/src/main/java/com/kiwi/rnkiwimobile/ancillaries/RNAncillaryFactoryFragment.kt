package com.kiwi.rnkiwimobile.ancillaries

import com.kiwi.rnkiwimobile.RNKiwiFragment;

abstract  class RNAncillaryFactoryFragment(
    initialProperties: RNAncillaryFactoryInitialProperties) : RNKiwiFragment(
        RNAncillaryFactoryModule.getInitialProperties(initialProperties)) {

    override fun getModuleName(): String {
        return RNAncillaryFactoryModule.moduleName
    }
}
