import DS from 'ember-data';

export default DS.Model.extend({
  balance: DS.attr('number'),
  apr: DS.attr('number'),
  payment: DS.attr('number'),
  monthsToZero: function(){
    //temporary
    // Need to ad loop to get months
    // Need to add && so that it requires both to return monthsToZero
    return (this.get('balance')-this.get('payment'))/12;
  }.property('balance','payment')


/**   return (this.get('balance')*(((this.get('apr')/100)/365)*this.get('daysInMonth')))+this.get('balance')-this.get('payment');
      }.property('balance','payment','apr','payment')
**/
});

/**
Balance - FIELD
APR - FIELD
DailyPercentageRate - notshown
DaysInMonth - notshown
InterestForMonth - notshown (isBalance * isDailyPercentageRate * isDaysInMonth)
BalancePlusInterest - notshown
MinimumPayment - FIELD
BalanceAfterPayment - notshown
PaymentToPriniciple - notshown
PaymentToInterest - DISPLAYED maybe
MonthsUntilZero - DISPLAYED
**/