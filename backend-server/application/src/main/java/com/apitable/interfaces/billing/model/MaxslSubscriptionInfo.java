/*
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package com.apitable.interfaces.billing.model;

/**
 * Maxsl Subscription.
 *
 * @author Maxsl
 */
public class MaxslSubscriptionInfo extends DefaultSubscriptionInfo {

    public MaxslSubscriptionInfo() {
        this("CE", "ce_unlimited", new MaxslSubscriptionFeature());
    }

    /**
     * construct.
     *
     * @param product  product name
     * @param basePlan base plan name
     * @param feature  subscription feature
     */
    public MaxslSubscriptionInfo(String product, String basePlan, SubscriptionFeature feature) {
        super(product, basePlan, feature);
    }

    @Override
    public boolean isFree() {
        return true;
    }
}
