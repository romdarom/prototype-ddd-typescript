import { createEventBus, slot } from "ts-event-bus";
import { EtablissementConfigureEvent } from "./EtablissementConfigureEvent";

let Bus: any = () => {
    return createEventBus({
        events: {
            healthFacilityConfiguredEvent: slot<EtablissementConfigureEvent>(),
            forcastSuccessEvent: slot(),
            forcastFailureEvent: slot()

        }
    })
}

export default Bus
