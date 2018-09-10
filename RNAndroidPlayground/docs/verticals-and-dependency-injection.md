# Verticals and dependency injection

### Example of vertical: RNHotelsActivity

In this vertical, we want to include only the Javascript code related to hotels and only the required native dependencies. rnkiwimobile provides RNHotelsActivity that looks like:

```kt
override fun getModuleName(): String {
  return "KiwiHotels"
}

override fun getJSEntryPoint(): String {
  return "app/hotels/index"
}

override fun getPackages(): MutableList<ReactPackage> {
  return mutableListOf(RNTooltipsPackage(),
    RNDeviceInfoPackage(),
    MapsPackage(),
    RNCurrencyManagerPackage(rnHotelsModules.currencyCallback),
    RNTranslationManagerPackage(rnHotelsModules.translationCallback),
    RNLoggingPackage(rnHotelsModules.hasActiveBooking),
    VectorIconsPackage())
}
```

As you can see, we specify only the hotels entry point on the Javascript side and we pass only the necessary native dependencies. Some of them (`react-native-native-modules`) we add a callback which should be implemented by the native consumer.

### Using a vertical (and dependency injection)

Let's say we want to use only Hotels somewhere. Our code could look like:

```kt
class HotelsActivity : RNHotelsActivity(HotelsModulesInjection) {
  companion object {
    fun getViewModelClass(): Class<HotelsActivity> =
      HotelsActivity::class.java
 }

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
 }

  override fun getInitialProperties(): Bundle? {
    // return Bundle with props
 }
}
```

The native app can then inject the the `HotelsModulesInjection` interface with its own code:

```kt
object HotelsModulesInjection : RNHotelsModulesInjection {
  override val translationCallback = object: ResourceStringCallback {
    override fun getTranslation(key: String) = // Native implementation
 }

  override val currencyCallback = object: CurrencyChangeCallback {
    override fun getFormatCurrency(amount: Double, currency: String) = // Native implementation
 }

  override val hasActiveBooking: Boolean = // Native implementation
}
```