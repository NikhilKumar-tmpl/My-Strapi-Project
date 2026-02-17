import type { Schema, Struct } from '@strapi/strapi';

export interface LocationLocation extends Struct.ComponentSchema {
  collectionName: 'components_location_locations';
  info: {
    displayName: 'location';
    icon: 'pinMap';
  };
  attributes: {
    location1: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface WheelchairAccessibilityWheelchairAccessibility
  extends Struct.ComponentSchema {
  collectionName: 'components_wheelchair_accessibility_wheelchair_accessibility_s';
  info: {
    displayName: 'Wheelchair Accessibility:';
  };
  attributes: {
    wheelChair: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    WheelchairAccessibility: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'location.location': LocationLocation;
      'wheelchair-accessibility.wheelchair-accessibility': WheelchairAccessibilityWheelchairAccessibility;
    }
  }
}
