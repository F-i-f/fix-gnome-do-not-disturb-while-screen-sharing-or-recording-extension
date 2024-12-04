import Gio from "@gi-ts/gio2";

const showBannersSetting = "show-banners";
const notificationsSchemaId = "org.gnome.desktop.notifications";

export class DoNotDisturbManager {
  private _notificationsSettings: Gio.Settings | null = null;

  private getNotificationsSettings() {
    if (!this._notificationsSettings) {
      this._notificationsSettings = new Gio.Settings({
        schema_id: notificationsSchemaId,
      });
    }

    return this._notificationsSettings;
  }

  turnDndOn() {
    this.getNotificationsSettings().set_boolean(showBannersSetting, false);
  }

  turnDndOff() {
    this.getNotificationsSettings().set_boolean(showBannersSetting, true);
  }

  dispose() {
    this._notificationsSettings = null;
  }
}
