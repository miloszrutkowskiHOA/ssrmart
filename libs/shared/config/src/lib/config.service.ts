import {
  inject,
  Injectable,
  InjectionToken,
  makeEnvironmentProviders,
} from '@angular/core';

export type ConfigOptions = {
  baseUrl: string;
  apiUrl: string;
  isProduction: boolean;
};

export const CONFIG_OPTIONS = new InjectionToken<ConfigOptions>(
  'CONFIG_OPTIONS'
);

@Injectable()
export class ConfigService {
  private readonly _config = inject(CONFIG_OPTIONS);

  get<T extends ConfigOptions[keyof ConfigOptions] = string>(
    key: keyof ConfigOptions
  ): T {
    return this._config[key] as T;
  }
}

export const provideConfig = (options: ConfigOptions) =>
  makeEnvironmentProviders([
    {
      provide: CONFIG_OPTIONS,
      useValue: options,
    },
    ConfigService,
  ]);
