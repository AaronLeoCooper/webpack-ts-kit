/**
 * Dynamically import a script (splits the webpack bundle)
 * @param scriptName {scripts}
 */
const getScript = async function (): Promise<any> {
  if (process.env.NODE_ENV === 'production') {
    return await import('./prod');
  } else {
    return await import('./dev');
  }
};

/**
 * Sample interface to be implemented by a class
 *
 * @interface TestInt
 */
interface TestInt {
  varr: number;
}

/**
 * Base class to be extended
 *
 * @class Other
 */
export class Other implements TestInt {

  public varr = 5;

}

/**
 * Sample class, extends Other base class
 *
 * @class BigBucks
 * @extends {Other}
 */
export class BigBucks extends Other {

  static static = 2;

  constructor (props: [ string ]) {
    super();

    console.log('props', props);
    console.log('this.varr', this.varr);

    const scriptName = process.env.NODE_ENV === 'production'
      ? 'prod'
      : 'dev';

    // Only now load an additional script module
    getScript()
      .then(script => {
        console.log(`${scriptName} loaded`, script);
      })
      .catch(err => {
        console.log(`failed to load ${scriptName}!`, err);
      });
  }

  public feedMe (food: string): void {
    console.log(`fed ${food} !`);
  }

  private shutUp (): void {
    console.log('shutting up..');
  }

}

export const app = new BigBucks([ 'testing', '1' ]);
