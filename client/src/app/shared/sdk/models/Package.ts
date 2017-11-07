/* tslint:disable */
import {
  PackageVersion,
  Section
} from '../index';

declare var Object: any;
export interface PackageInterface {
  "name"?: string;
  "identifier"?: string;
  "shortDescription": string;
  "minimum"?: string;
  "maximum"?: string;
  "author"?: string;
  "maintainer"?: string;
  "visible"?: boolean;
  "stage"?: string;
  "latest"?: string;
  "detailedDescription"?: any;
  "id"?: any;
  "sectionId"?: any;
  versions?: PackageVersion[];
  section?: Section;
  downloads?: any[];
}

export class Package implements PackageInterface {
  "name": string;
  "identifier": string;
  "shortDescription": string;
  "minimum": string;
  "maximum": string;
  "author": string;
  "maintainer": string;
  "visible": boolean;
  "stage": string;
  "latest": string;
  "detailedDescription": any;
  "id": any;
  "sectionId": any;
  versions: PackageVersion[];
  section: Section;
  downloads: any[];
  constructor(data?: PackageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Package`.
   */
  public static getModelName() {
    return "Package";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Package for dynamic purposes.
  **/
  public static factory(data: PackageInterface): Package{
    return new Package(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Package',
      plural: 'Packages',
      path: 'Packages',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "identifier": {
          name: 'identifier',
          type: 'string'
        },
        "shortDescription": {
          name: 'shortDescription',
          type: 'string',
          default: 'An Awesome Mobile Substrate Tweak'
        },
        "minimum": {
          name: 'minimum',
          type: 'string'
        },
        "maximum": {
          name: 'maximum',
          type: 'string'
        },
        "author": {
          name: 'author',
          type: 'string'
        },
        "maintainer": {
          name: 'maintainer',
          type: 'string'
        },
        "visible": {
          name: 'visible',
          type: 'boolean',
          default: true
        },
        "stage": {
          name: 'stage',
          type: 'string',
          default: 'stable'
        },
        "latest": {
          name: 'latest',
          type: 'string'
        },
        "detailedDescription": {
          name: 'detailedDescription',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "sectionId": {
          name: 'sectionId',
          type: 'any'
        },
      },
      relations: {
        versions: {
          name: 'versions',
          type: 'PackageVersion[]',
          model: 'PackageVersion',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'packageId'
        },
        section: {
          name: 'section',
          type: 'Section',
          model: 'Section',
          relationType: 'belongsTo',
                  keyFrom: 'sectionId',
          keyTo: 'id'
        },
        downloads: {
          name: 'downloads',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'packageId'
        },
      }
    }
  }
}
