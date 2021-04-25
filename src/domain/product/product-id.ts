import { DomainException } from '@src/domain/shared/domain-exception';
import { ValueObject } from '@src/domain/shared/value-object';
import { genUuid } from '@src/lib/utils/gen-uuid';
import { isUuid } from '@src/lib/utils/is-uuid';

export class ProductId extends ValueObject<string> {
  private constructor(val: string) {
    super(val);
  }

  public static gen(): ProductId {
    return ProductId.of(genUuid());
  }

  public static of(val: string): ProductId {
    const instance = new ProductId(val);
    instance.validate();

    return instance;
  }

  /**
   * @throws {DomainException}
   */
  private validate(): void {
    if (!isUuid(this.value)) {
      throw new DomainException(`argument is not uuid: ${this.value}`);
    }
  }
}
